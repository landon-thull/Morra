import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const countToInt = {"ZERO" : 0, "ONE" : 1, "TWO" : 2, "THREE" : 3, "FOUR" : 4, "FIVE" : 5};
const guessToInt = {"ZERO" : 0, "ONE" : 1, "TWO" : 2, "THREE" : 3, "FOUR" : 4, "FIVE" : 5, "SIX" : 6, "SEVEN" : 7, "EIGHT" : 8, "NINE" : 9, "TEN" : 10};
const intToOutcome = ['Alice Wins!', 'Draw', "Bob Wins!"];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', WalletConnect }));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: "ConnectAccount", ...defaults};
  };
  async componentDidMount() {
    console.log("here")
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    this.setState({view: "DeployerOrAttacher"});
    console.log(this.state)
  }
  selectDeployer() {this.setState({view: "Wrapper", ContentView: Deployer}); }
  selectAttacher() {this.setState({view: "Wrapper", ContentView: Attacher}); }
  render() { return renderView(this, AppViews); }
}

class Player extends React.Component {
  random() { return reach.hasRandom.random(); }
  async getCount() {
    const count = await new Promise(resolveCountP => {
      this.setState({view: "GetCount", playable: true, resolveCountP });
    });
    this.setState({view: 'WaitingForResults', count});
    return countToInt[count]
  }
  async getGuess() {
    const guess = await new Promise(resolveGuessP => {
      this.setState({view: "GetGuess", playable: true, resolveGuessP });
    });
    this.setState({view: 'WaitingForResults', guess});
    return guessToInt[guess]
  }

  seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]}); }
  informTimeout() { this.setState({view: 'Timeout'}); }
  playCount(count) { this.state.resolveCountP(count); }
  playGuess(guess) { this.state.resolveGuessP(guess); }
}

class Deployer extends Player {     
  constructor(props) {
    super(props);
    this.state = {view: "SetWager"};
  }
  setWager(wager) { this.setState({view: 'Deploy', wager}); }
  async deploy() {
    console.log(this.state.wager)
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    this.wager = reach.parseCurrency(this.state.wager); // UInt
    console.log(this.wager)
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
    console.log(this)
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify( await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  }
  render() { return renderView(this, DeployerViews); }
}

class Attacher extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Bob(ctc, this);
  }
  async acceptWager(wagerAtomic) { // Fun([UInt], Null)
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'WaitingForTurn'});
  }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />); 
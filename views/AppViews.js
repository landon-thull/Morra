import React from "react";

const exports = {};

exports.Wrapper = class extends React.Component {
  render () {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App.header">
          <h1>Morra</h1>
          {content}
        </header>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Connecting Account...
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div className="content">
        Select A Role:
        <br />
        <p>
          <button
          onClick={() => parent.selectDeployer()}
          >Deployer</button>
          <button
          onClick={() => parent.selectAttacher()}
          >Attacher</button>
        </p>
      </div>
    )
  }
}

export default exports
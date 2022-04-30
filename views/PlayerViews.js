import React from "react";

const exports = {};

exports.GetCount = class extends React.Component {
  render() {
    const {parent, playable, count} = this.props;
    return (
      <div>
        {count ? "Last round was a draw, pick again!" : ""}
        <br/>
        <button className="count-button" 
        disabled={!playable}
        onClick={
          () => parent.playCount("ZERO")
        }
        >ZERO</button>
        <button className="count-button" 
        disabled={!playable}
        onClick={
          () => parent.playCount("ONE")
        }
        >ONE</button>
        <button className="count-button" 
        disabled={!playable}
        onClick={
          () => parent.playCount("TWO")
        }
        >TWO</button>
        <button className="count-button" 
        disabled={!playable}
        onClick={
          () => parent.playCount("THREE")
        }
        >THREE</button>
        <button className="count-button" 
        disabled={!playable}
        onClick={
          () => parent.playCount("FOUR")
        }
        >FOUR</button>
        <button className="count-button" 
        disabled={!playable}
        onClick={
          () => parent.playCount("FIVE")
        }
        >FIVE</button>
      </div>
    )
  }
}

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, guess} = this.props;
    
    return (
      <div>
        {guess ? "Last round was a draw, pick again!" : ""}
        <br/>
        <button className="guess-button" 
        disabled={!playable}
        onClick={
          () => parent.playGuess("ZERO")
        }
        >ZERO</button>
        <button className="guess-button" 
        disabled={!playable}
        onClick={
          () => parent.playGuess("ONE")
        }
        >ONE</button>
        <button className="guess-button" 
        disabled={!playable}
        onClick={
          () => parent.playGuess("TWO")
        }
        >TWO</button>
        <button className="guess-button" 
        disabled={!playable}
        onClick={
          () => parent.playGuess("THREE")
        }
        >THREE</button>
        <button className="guess-button" 
        disabled={!playable}
        onClick={
          () => parent.playGuess("FOUR")
        }
        >FOUR</button>
        <button className="guess-button" 
        disabled={!playable}
        onClick={
          () => parent.playGuess("FIVE")
        }
        >FIVE</button>
        <button className="count-button" 
        disabled={!playable}
        onClick={
          () => parent.playGuess("SIX")
        }
        >SIX</button>
        <button className="count-button" 
        disabled={!playable}
        onClick={
          () => parent.playGuess("SEVEN")
        }
        >SEVEN</button>
        <button className="count-button" 
        disabled={!playable}
        onClick={
          () => parent.playGuess("EIGHT")
        }
        >EIGHT</button>
        <button className="count-button" 
        disabled={!playable}
        onClick={
          () => parent.playGuess("NINE")
        }
        >NINE</button>
        <button className="count-button" 
        disabled={!playable}
        onClick={
          () => parent.playGuess("TEN")
        }
        >TEN</button>
      </div>
    )
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}


export default exports
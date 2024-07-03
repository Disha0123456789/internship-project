import React, { Component } from 'react';
import './TodaysLuck.css';
import sound from "./assets/sound.m4a";
import Lottie from 'lottie-react';
import cbox from './box/cbox.json';
import obox from './box/obox.json';
import quotes from './quotes.json';

class App extends Component {
  state = {
    val: false,
    text: ""
  };

  changeImg = () => {
    this.setState({ val: !this.state.val, text: "" });
  };

  changeImg1 = () => {
    this.setState({ val: !this.state.val });
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomNumber];
    setTimeout(() => {
      this.setState({ text: quote.name });
    }, 3000);
    new Audio(sound).play();
  };

  render() {
    const { val, text } = this.state;

    return (
      <div className='container-card'>
        {val ? <h1 className='quote-text'>{text}</h1> : <h1 className='quote-text'>Tap the box</h1>}
        {val ? (
          <Lottie className='lottie-img' animationData={obox} />
        ) : (
          <Lottie onClick={this.changeImg1} className='lottie-img' animationData={cbox} />
        )}
        {val && (<button onClick={this.changeImg} className='retry-btn'>Retry</button>)}
      </div>
    );
  }
}

export default App;

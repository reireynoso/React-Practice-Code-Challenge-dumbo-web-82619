import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    beginningIndex: 0,
    lastIndex: 4,
    eatenSushi: [],
    balance: 50
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushi: data
      })
    })
  }

  
  eatSushi = (sushiObj) => {
    if (this.state.balance < sushiObj.price) {
      alert("YOU got money bro?")
    } else {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushiObj],
      balance: this.state.balance - sushiObj.price
    })
  }
  }
   

  handleClicked = () => {
    this.setState({
      beginningIndex: this.state.beginningIndex + 4,
      lastIndex: this.state.lastIndex + 4
    })
  }

  render() {
    console.log("s",this.state.eatenSushi)
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} sushi={this.state.sushi} start={ this.state.beginningIndex } end={ this.state.lastIndex} handleClicked={ this.handleClicked } eatenSushi={this.state.eatenSushi}/>
        <Table eatenSushi={this.state.eatenSushi} balance={this.state.balance}/>
      </div>
    );
  }
}

export default App;
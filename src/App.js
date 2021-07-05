import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: #440066;
  color: #E6EAFF;
  `

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      { name: "Bitcoin",
        ticker: "BTC",
        balance: 0.5,
        price: 34000 },
      { name: "Ethereum",
        ticker: "ETH",
        balance: 5,
        price: 2100
      },
      {name: "Cardano",
        ticker: "ADA",
        balance: 5000,
        price: 1.25
      },
      {name: "USDC",
        ticker: "USDC",
        balance: 2500,
        price: "1.00"
      },
    ]
  }
  constructor(props){
    super(props);
  }

  balanceVisibility = () => {
    this.setState(function(oldState){
      return{
        ...oldState,
        showBalance: !oldState.showBalance
    }});
  }

  handleUpdatePrice = (valueTicker) => {
    const newCoinPrice = this.state.coinData.map(function(values) {
      let newValues = {...values};
      if(valueTicker === values.ticker){
        const randomPercent = 0.995 + Math.random() * 0.01;
        newValues.price *= (randomPercent).toFixed(2);
      }
    return {
      newValues
    }
  });
  this.setState({coinData : newCoinPrice});
}

  render(){
    return (
      <Div>
          <ExchangeHeader/>
          <AccountBalance
            amount= {this.state.balance}
            showBalance={this.state.showBalance}
            balanceVisibility= {this.balanceVisibility}/>
          <CoinList
            coinData= {this.state.coinData}
            showBalance = {this.state.showBalance}
            handleUpdatePrice={this.state.handleUpdatePrice}/>
      </Div>
    );
  }
}

export default App;

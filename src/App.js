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
  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        { name: "Bitcoin",
          ticker: "BTC",
          price: 34000 },
        { name: "Ethereum",
          ticker: "ETH",
          price: 2100
        },
        {name: "Cardano",
          ticker: "ADA",
          price: 1.25
        },
        {name: "USDC",
          ticker: "USDC",
          price: "1.00"
        },
      ]
    }
  }
  render(){
    return (
      <Div>
          <ExchangeHeader/>
          <AccountBalance amount= {this.state.balance}/>
          <CoinList coinData= {this.state.coinData}/>
      </Div>
    );
  }
}

export default App;

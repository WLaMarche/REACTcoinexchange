import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';
import axios from 'axios';


const Div = styled.div`
  text-align: center;
  background-color: #2DB080;
  color: #E6EAFF;
  `

const COIN_COUNT = 10;

function App(props) {
  /*state = {
    balance: 10000,
    showBalance: true,
    coinData: []
  }*/
  //in order to create a class into a function, we can't use a state anymore
    //instead, you create const variables with a useState

const [balance, setBalance] = React.useState(10000);
const [showBalance, setshowBalance] = React.useState(true);
const [coinData, setcoinData] = React.useState([]);
const [coinNews, setcoinNews] = React.useState([]);

const componentDidMount = async () => {
  //const callback = async() => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins/');
    //creating a variable that gets the response.data ID's of coin, and slicing to read only array elements 0-9
    const coinIDs = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    //get prices API
    const tickerURL = 'https://api.coinpaprika.com/v1/tickers/';
    //create a variable that goes into the mapping of coinIDs array
      //the mapping is a function that starts with the "id"" element
      //runs the function of getting the coinpaprika API for tickers, + id
        //the API is tickerURL/coinID.. ex (https://api.coinpaprika.com/v1/tickers/btc-bitcoin)
    const promises = coinIDs.map(id => axios.get(tickerURL + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response) {
      const coin = response.data;
      return{
        key: coin.id,
        id: coin.id,
        rank: coin.rank,
        name: coin.name,
        ticker: coin.symbol,
        allTimeHigh: (coin.quotes.USD.ath_price).toFixed(2),
        percFromATH: coin.quotes.USD.percent_from_price_ath,
        dailyPercent: coin.quotes.USD.percent_change_7d,
        balance: 0,
        price: (coin.quotes.USD.price).toFixed(2),
      };
    })
    //instead of "setState," we use our useState function for coinData to set the new CoinData (coinPriceData)
    setcoinData(coinPriceData);
  //}
  //setInterval(callback, 10000);
  }

React.useEffect(() => {
  if(coinData.length === 0){
    componentDidMount();
  }});

  const balanceVisibility = () => {
    setshowBalance(oldshowBalance => !oldshowBalance);
  }

  const pumpBalance = () => {
    setBalance(balance + 1200);
  }

  /*const handleUpdatePrice = async(valueChangeId) => {
    const tickerURL = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerURL);
    const newprice = (response.data.quotes.USD.price).toFixed(2);
    const newCoinData = coinData.map(function(values){
      let oldValues = {...values};
      if (valueChangeId === values.key){
        oldValues.price = newprice;
    }
    return oldValues;
  });
  setcoinData(newCoinData);
} */

const handleBuy = (valueChangeId, price) => {
  const newCoinData = coinData.map(values => {
    let oldValues = {...values};

    if(valueChangeId === oldValues.key){
      if(balance >= oldValues.price){
      oldValues.balance += 1;
      setBalance(parseFloat(balance) - parseFloat(oldValues.price));}
      else{
        alert("Insufficienct funds to buy " + oldValues.name + ". Cash that stimmy check!");
      }}
    return oldValues;
  })
  setcoinData(newCoinData);
}

const handleSell = (valueChangeId, price) => {
  const newCoinData = coinData.map(values => {
    let oldValues = {...values};

    if(valueChangeId === oldValues.key){
      if(oldValues.balance > 0){
      oldValues.balance -= 1;
      setBalance(parseFloat(balance) + parseFloat(oldValues.price));
    }
    else{
      alert("You don't have enough " + oldValues.name + " to sell! Hit that stimmy!");
    }
  }
    return oldValues;
  });
  setcoinData(newCoinData);
}

const coinInfo = () => {
  alert("Functionality in progress!");
}


    return (
      <Div>
          <ExchangeHeader/>
          <AccountBalance
            amount= {balance}
            showBalance={showBalance}
            balanceVisibility= {balanceVisibility}
            pumpBalance= {pumpBalance}/>
          <CoinList
            coinData= {coinData}
            showBalance = {showBalance}
            handleBuy={handleBuy}
            handleSell={handleSell}
            coinInfo= {coinInfo}
            />
      </Div>
    );
  }

export default App;

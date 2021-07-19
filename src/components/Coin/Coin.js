import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TD = styled.td`
  border: 1px solid #E6EAFF;
  width: 15vh;
`


function Coin(props) {
    //.bind helps us bind the handleClick function that's outside of this constructor
    //into what's inside the constructor, access properties & set a new value (in this case, price)


  /*componentDidMount(){
    const callback = () => {
      const randomPercent = 0.995 + Math.random() * 0.01;
      //can't set this.state.price because it's already initialized
      //we use another function called 'this.setState' that inherently accesses current state and can re-initialize this.state
      //follow format below
      this.setState(({coinData : price}){
        //return the price as the object that it already is
        return {
          price: (price * randomPercent).toFixed(2)
        };
      });
    }
    //now, we use the callback we created
    setInterval(callback, 5000);
  } */

  const handleBuy = (event) => {
    event.preventDefault();

    props.handleBuy(props.valueChangeId);
  }

  const handleSell = (event) => {
    event.preventDefault();

    props.handleSell(props.valueChangeId);
  }

  const coinInfo = (event) => {
    event.preventDefault();

    props.coinInfo(props.valueChangeId);
  }

    return (
      <tr>
        <TD>{props.rank}</TD>
        <TD>{props.name}</TD>
        <TD>{props.ticker}</TD>
        <TD>${props.price}</TD>
        <TD>${props.allTimeHigh}</TD>
        <TD>{props.percFromATH}%</TD>
        <TD>{props.dailyPercent}%</TD>
        {props.showBalance ? <TD>{props.balance}</TD> : <TD>***</TD>}
        <TD>
          <form action="#" method="POST">
            <button onClick={handleBuy}>Buy</button>
          </form>
          <form action="#" method="POST">
            <button onClick={handleSell}>Sell</button>
          </form>
        </TD>
        <TD><form action="#" method="POST">
          <button onClick={coinInfo}>Coin Update!</button>
        </form>
        </TD>
      </tr>
    );
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string,
  price: PropTypes.number,
  supply: PropTypes.number,
}

export default Coin;

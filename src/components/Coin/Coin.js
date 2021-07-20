import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/*const TD = styled.td`
  border: 1px solid #E6EAFF;
  width: 15vh;
`;

const Buy = styled.buy`
  background-color: #f44336;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;*/
/*const SellButton = styled.sellButton`
  background-color: #f44336;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`
*/

const TableData = styled.td`
    border: 1px solid;
    width: 36vh;
    color: dimgray;
    background-color: #FAF2E1;
    text-align: center;
    margin: 50px auto 50px auto;
    font-size: 1.2rem;

`;
const TDControl = styled(TableData)`
    width: 36vw;
`;

const BuyButton = styled.button`
    background-color: #32C48F;
    font-size: 12 px;
    width: 64px;
    line-height: 12 px;
    padding: 4px;
    border-radius: 5px;
    margin: 3px 5px 0;
    border: 2px solid rgb(28, 110, 164);
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
    &:hover {
    background-color: #289C71;
  }
`;

const SellButton = styled.button`
    background-color: #EB8976;
    font-size: 12 px;
    width: 64px;
    line-height: 12 px;
    padding: 4px;
    border-radius: 5px;
    margin: 3px 5px 0;
    border: 2px solid rgb(28, 110, 164);
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
    &:hover {
    background-color: #B3685A;
  }
`;

const CoinInfoButton = styled.button`
    background-color: #B3FFE5;
    font-size: 12 px;
    width: 75px;
    line-height: 12 px;
    padding: 4px;
    border-radius: 5px;
    margin: 3px 5px 0;
    border: 2px solid rgb(28, 110, 164);
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
    &:hover {
    background-color: #7AAD9C;
  }
`;


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
        <TableData>{props.rank}</TableData>
        <TableData>{props.name}</TableData>
        <TableData>{props.ticker}</TableData>
        <TableData>${props.price}</TableData>
        <TableData>${props.allTimeHigh}</TableData>
        <TableData>{props.percFromATH}%</TableData>
        <TableData>{props.dailyPercent}%</TableData>
        {props.showBalance ? <TableData>{props.balance}</TableData> : <TableData>***</TableData>}
        <TableData>
          <form action="#" method="POST">
            <BuyButton onClick={handleBuy}>Buy</BuyButton>
          </form>
          <form action="#" method="POST">
            <SellButton onClick={handleSell}>Sell</SellButton>
          </form>
        </TableData>
        <TableData><form action="#" method="POST">
          <CoinInfoButton onClick={coinInfo}>Coin Update!</CoinInfoButton>
        </form>
        </TableData>
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

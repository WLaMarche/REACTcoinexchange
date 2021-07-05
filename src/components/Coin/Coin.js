import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TD = styled.td`
  border: 1px solid #E6EAFF;
  width: 15vh;
`


class Coin extends Component {
  constructor (props){
    super(props);
    //.bind helps us bind the handleClick function that's outside of this constructor
    //into what's inside the constructor, access properties & set a new value (in this case, price)

  }
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

  handleClick = (event) => {
    event.preventDefault();

    this.props.handleUpdatePrice(this.props.ticker);
  }

  render() {
    return (
      <tr>
        <TD>{this.props.name}</TD>
        <TD>{this.props.ticker}</TD>
        <TD>{this.props.price}</TD>
        {this.props.showBalance ? <TD>{this.props.balance}</TD> : <TD>***</TD>}
        <TD>
          <form action = "#" method = "POST">
            <button onClick = {this.handleClick}>Update Price</button>
          </form>
        </TD>
      </tr>
    );
  }
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string,
  price: PropTypes.number,
}

export default Coin;

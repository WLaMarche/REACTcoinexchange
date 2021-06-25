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
    //can't change props, but you can CREATE & INITIALIZE a variable called 'this.state'
    this.state = {
      price: this.props.price
    }
    //.bind helps us bind the handleClick function that's outside of this constructor
    //into what's inside the constructor, access properties & set a new value (in this case, price)
    this.handleClick = this.handleClick.bind(this);
  }

  //"Catch" the new STATE when the component mounts to the DOM
  componentDidMount(){
    const callback = () => {
      const randomPercent = 0.995 + Math.random() * 0.01;
      //can't set this.state.price because it's already initialized
      //we use another function called 'this.setState' that inherently accesses current state and can re-initialize this.state
      //follow format below
      this.setState(function(oldState){
        //return the price as the object that it already is
        return {
          price: (oldState.price * randomPercent).toFixed(2)
        };
      });
    }
    //now, we use the callback we created
    setInterval(callback, 5000);
  }

  handleClick(event) {
    event.preventDefault();

    const randomPercent = 0.995 + Math.random() * 0.01;
    this.setState(function(oldState){
      return {
        price: (oldState.price * randomPercent).toFixed(2)
      };
    });
  }

  render() {
    return (
      <tr>
        <TD>{this.props.name}</TD>
        <TD>{this.props.ticker}</TD>
        <TD>${this.state.price}</TD>
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
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number,
}

export default Coin;

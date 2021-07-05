import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 24px;
  margin: 25px;
`


class AccountBalance extends Component {
  render () {
    //using an if statement, represented as a variable
    //since we have set showBalance to true (in App.js), Hide balance is true state
    //else, hide balance is clicked already and it will then become Show Balance
    const hideOrShow = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
      if(this.props.showBalance){
        content = <div>${this.props.amount}</div>
      }

    return (
      <Section>
        Account Balance:
          {content}
            <button onClick = {this.props.balanceVisibility}>{hideOrShow}</button>
      </Section>
    );
  }
}

AccountBalance.propTypes = {
  amount: PropTypes.number,
}

export default AccountBalance;

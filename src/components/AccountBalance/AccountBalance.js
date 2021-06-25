import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 24px;
  margin: 25px;
`


class AccountBalance extends Component {
  render () {
    return (
      <Section>
          Account Balance: ${this.props.amount}
      </Section>
    );
  }
}

AccountBalance.propTypes = {
  amount: PropTypes.number,
}

export default AccountBalance;

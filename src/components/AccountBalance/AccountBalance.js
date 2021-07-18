import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 24px;
  margin: 25px;
  margin:auto;
`
const Button = styled.button`
    border: 1px solid #000;
    vertical-align: top;
    background: grey;
    height: 50px;
    width: 100px;
    font-size: 1.5rem;
    text-align: center;
    padding: 0rem 1rem 0rem 1rem;
    font-size: 16px;
    background-color: #99CCFF;
    cursor:pointer;
    max-width:100%;
    margin:auto;
`


function AccountBalance(props) {
    //using an if statement, represented as a variable
    //since we have set showBalance to true (in App.js), Hide balance is true state
    //else, hide balance is clicked already and it will then become Show Balance
    const hideOrShow = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
      if(props.showBalance){
        content = <div>${props.amount}</div>
      }

    return (
      <Section>
        Account Balance:
          {content}

            <Button onClick = {props.balanceVisibility}>{hideOrShow}</Button>
            <Button>
                <img src='https://media.npr.org/assets/img/2020/10/06/ap_20267573916800-dc7c0211bc13a2be0edc048278ae3cc3dc6b68b7-s1600-c85.webp'
                  alt="Jerome Powell" height={50} width={100}
                onClick = {props.pumpBalance}/>
            </Button>

      </Section>
    );
  }

AccountBalance.propTypes = {
  amount: PropTypes.number,
}

export default AccountBalance;

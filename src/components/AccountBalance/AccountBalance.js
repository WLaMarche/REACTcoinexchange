import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 32px;
  text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #00EBC3, 0 -10px 20px #008080, 0 -18px 40px #00EBC3;
  font-family: Papyrus, sans-serif;
  color: #FAF2E1;
  margin: 25px;
  margin:auto;
`
const Button = styled.button`
    background-color: #B3FFE5;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    font-size: 12 px;
    width: 100px;
    line-height: 12 px;
    padding: 10px;
    border-radius: 5px;
    margin: 3px 5px 0;
    border: 2px solid rgb(28, 110, 164);
    cursor: pointer;
    vertical-align: top;
    transition-duration: 0.4s;
    &:hover {
    background-color: #7AAD9C;
  }
`;

/*border: 1px solid #000;
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
*/

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
            <Button onClick = {props.pumpBalance}>Stimmy Check!</Button>
      </Section>
    );
  }

AccountBalance.propTypes = {
  amount: PropTypes.number,
}

export default AccountBalance;

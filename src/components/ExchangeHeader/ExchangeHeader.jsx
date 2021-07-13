import React, {Component} from 'react';
import './LogoRotator.css';
import logo from './logo.svg';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #090033;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #E6EAFF;
`
const H1 = styled.h1`
  font-size: 4rem;
`

class ExchangeHeader extends Component {
    render(){
      return(
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <H1>
            Decentralized Trading Exchange
          </H1>
        </Header>
      )
    }
}

export default ExchangeHeader;

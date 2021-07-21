import React, {Component} from 'react';
import './LogoRotator.css';
import logo from './logo.svg';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #2DB080;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  font-family: Papyrus, monospace;
  text-shadow: 0 0 5px #FFF, 0 0 10px #2DB080, 0 0 15px #FFF, 0 0 20px #2DB080, 0 0 30px #2DB080, 0 0 40px #2DB080, 0 0 55px #006666, 0 0 75px #49ff18;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #FAF2E1;

`
const H1 = styled.h1`
  font-size: 2.5rem;
`
class ExchangeHeader extends Component {
    render(){
      return(
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <H1>
            Decentralized Crypto Asset Trading Exchange
          </H1>
        </Header>
      )
    }
}

export default ExchangeHeader;

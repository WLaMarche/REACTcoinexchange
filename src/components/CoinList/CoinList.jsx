import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
margin: 50px;
display: inline-block;`


function CoinList(props) {
      return(
        <Table>
          <thead>
            <tr>
              <th> Rank </th>
              <th> Name </th>
              <th> Ticker </th>
              <th> Price </th>
              <th> All Time High </th>
              <th> % from ATH </th>
              <th> 24hr % </th>
              <th> Balance </th>
              <th> Buy/Sell </th>
              <th> Coin Info </th>
            </tr>
            </thead>
              <tbody>
              {props.coinData.map(
                  (value => <Coin
                    key={value.name}
                    handleBuy={props.handleBuy}
                    handleSell={props.handleSell}
                    rank={value.rank}
                    name={value.name}
                    ticker={value.ticker}
                    price={value.price}
                    allTimeHigh = {value.allTimeHigh}
                    percFromATH = {value.percFromATH}
                    dailyPercent = {value.dailyPercent}
                    showBalance = {props.showBalance}
                    balance={value.balance}
                    coinInfo= {props.coinInfo}
                    valueChangeId={value.key}
                    />)
                )
              }
              </tbody>
          </Table>
      )
    }

export default CoinList;

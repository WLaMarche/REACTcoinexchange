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
              <th> Market Cap </th>
              <th> Balance </th>
            </tr>
            </thead>
              <tbody>
              {props.coinData.map(
                  (value => <Coin
                    key={value.name}
                    handleUpdatePrice={props.handleUpdatePrice}
                    rank={value.rank}
                    name={value.name}
                    ticker={value.ticker}
                    price={value.price}
                    marketCap = {value.marketCap}
                    showBalance = {props.showBalance}
                    balance={value.balance}
                    valueChangeId={value.key}
                    />)
                )
              }
              </tbody>
          </Table>
      )
    }

export default CoinList;

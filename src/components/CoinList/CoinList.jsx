import React, {Component} from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
margin: 50px;
display: inline-block;`


class CoinList extends Component {
    render(){
      return(
        <Table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Ticker </th>
              <th> Price </th>
            </tr>
            </thead>
              <tbody>
              {
                this.props.coinData.map(
                  (value => <Coin key={value.name} name={value.name} ticker={value.ticker} price={value.price}/>)
                )
              }
              </tbody>
          </Table>
      )
    }
}

export default CoinList;

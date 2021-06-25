
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

//.coin-row td {
  //border: 1px solid #E6EAFF;
  //width: 15vh;
//}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Decentralized Trading Exchange
        </h1>
      </header>
        <AccountBalance amount= {10000}/>
        <table className = "coin-table">
          <thead>
            <tr>
              <th> Name </th>
              <th> Ticker </th>
              <th> Price </th>
            </tr>
            </thead>
              <tbody>
                <Coin name= "Bitcoin" ticker= "BTC" price ={34000} />
                <Coin name= "Ethereum" ticker= "ETH" price ={2100} />
                <Coin name= "Cardano" ticker= "ADA" price ={1.25} />
              </tbody>
          </table>
    </div>
  );
}

export default App;

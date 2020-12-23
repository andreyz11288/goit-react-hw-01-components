
import './App.css';
import React from 'react';
import './index.css';
import Profile from './Profile';
import Statistics from './Statistics'
import FriendList from './FriendList'
import TransactionHistory from "./TransactionHistory";
import data from "./sourse/user.json";
import statisticalData from "./sourse/statistical-data.json";
import transactions from "./sourse/transactions.json";



function App() {
  return (
    <div className="App">
     {<Profile data={data} />},
{<Statistics title="Upload stats" stats={statisticalData} />},
{<FriendList />}
{<TransactionHistory items={transactions}/>}
    </div>
  );
}

export default App;

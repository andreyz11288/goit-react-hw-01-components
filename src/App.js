import './App.css';
import React from 'react';
import './index.css';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import data from './sourse/user.json';
import statisticalData from './sourse/statistical-data.json';
import transactions from './sourse/transactions.json';
import friends from './sourse/friends.json';

function App() {
  return (
    <div className="App">
      {
        <Profile
          name={data.name}
          tag={data.tag}
          location={data.location}
          avatar={data.avatar}
          followers={data.stats.followers}
          views={data.stats.views}
          likes={data.stats.likes}
        />
      }
      ,{<Statistics title="Upload stats" stats={statisticalData} />},
      {<Statistics stats={statisticalData} />},
      {<FriendList friends={friends} />}
      {<TransactionHistory items={transactions} />}
    </div>
  );
}

export default App;

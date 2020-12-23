import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './Profile';
import Statistics from './Statistics'
import data from "./sourse/user.json";
import statisticalData from "./sourse/statistical-data.json";

ReactDOM.render(
  <React.StrictMode>
    <Profile data={data} />
{/* <Statistics title="Upload stats" stats={statisticalData} />; */}
<Statistics stats={statisticalData} />;
  </React.StrictMode>,
  document.getElementById('root')
);


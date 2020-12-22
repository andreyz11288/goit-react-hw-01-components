import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './Profile';
import data from "./sourse/user.json";

ReactDOM.render(
  <React.StrictMode>
    <Profile data={data}  />
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ColorMath from "./js/ColorMath";


ReactDOM.render(
  <React.StrictMode>
    <App/>    
  </React.StrictMode>,
  document.getElementById('root')
);

ColorMath()


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './Profile';
import Statistics from './Statistics'
import FriendList from './FriendList'
import data from "./sourse/user.json";
import statisticalData from "./sourse/statistical-data.json";
import friends from './sourse/friends.json';


ReactDOM.render(
  <React.StrictMode>
    <Profile data={data} />
<Statistics title="Upload stats" stats={statisticalData} />,
<FriendList friends={friends} />,
  </React.StrictMode>,
  document.getElementById('root')
);

const qq = document.querySelectorAll('.item')
qq[0].style.backgroundColor = `${get_rand_color()}`
qq[1].style.backgroundColor = `${get_rand_color()}`
qq[2].style.backgroundColor = `${get_rand_color()}`
qq[3].style.backgroundColor = `${get_rand_color()}`
qq[4].style.backgroundColor = `${get_rand_color()}`
// qq.setAttribute('style', `background-color: ${get_rand_color()} ;`)
function get_rand_color(){
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

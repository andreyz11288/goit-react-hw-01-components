import React from 'react';
import './FriendList.css';


function FriendList({ friends }) {

        
    return (<ul className="friend-list">
    {friends.map(item => <li className="item">
  {item.isOnline ?(<span className="status"></span>):(<span className="noStatus"></span>)}
  <img className="avatar" src={item.avatar} alt="" width="48" />
  <p className="name">{item.name}</p>
</li>)}
  </ul>
  )
}

export default FriendList;



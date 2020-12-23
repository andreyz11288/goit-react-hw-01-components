import React from 'react';
import './FriendList.css';


function FriendListItem({ friends }) {

        
    return (<ul className="friend-list">
    {friends.map(item => <li key={item.id} className="friend-item">
  {item.isOnline ?(<span className="friend-status"></span>):(<span className="friend-noStatus"></span>)}
  <img className="friend-avatar" src={item.avatar} alt="" width="48" />
  <p className="friend-name">{item.name}</p>
</li>)}
  </ul>
  )
}

export default FriendListItem;


import React from 'react';
import './FriendList.css';
import FriendListItem from "./FriendListItem";
import friends from './sourse/friends.json';

function FriendList() {

        
    return (<ul className="friend-list">
    {<FriendListItem friends={friends}/> }
  </ul>
  )
}

export default FriendList;



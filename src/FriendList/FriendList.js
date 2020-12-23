import React from 'react';
// import PropTypes from 'prop-types';
import './FriendList.css';
import FriendListItem from "./FriendListItem";
import friends from '../sourse/friends.json';

function FriendList() {

        
    return (<ul className="friend-list">
    {<FriendListItem friends={friends}/> }
  </ul>
  )
}

export default FriendList;



import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <FriendListItem
          isOnline={friend.isOnline}
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.protoType = {
  friends: PropTypes.array,
};

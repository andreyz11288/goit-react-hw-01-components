import './FriendList.module.css';
import PropTypes from 'prop-types';
import img from '../unnamed.jpg';

function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li key={id} className="friend-item">
      {isOnline ? (
        <span className="friend-status"></span>
      ) : (
        <span className="friend-noStatus"></span>
      )}
      <img className="friend-avatar" src={avatar} alt="" width="48" />
      <p className="friend-name">{name}</p>
    </li>
  );
}

export default FriendListItem;

FriendListItem.defaultProps = {
  avatar: img,
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

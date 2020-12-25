import PropTypes from 'prop-types';
import img from '../unnamed.jpg';
import s from './FriendList.module.css';

function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li key={id} className={s.item}>
      {isOnline ? (
        <span className={s.status}></span>
      ) : (
        <span className={s.noStatus}></span>
      )}
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
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

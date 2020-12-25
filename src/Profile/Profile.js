// import logo from './logo.svg';
import PropTypes from 'prop-types';
import React from 'react';
import './Profile.css';
import img from '../unnamed.jpg';

function Profile({ avatar, name, tag, location, followers, likes, views }) {
  return (
    <div className="Profile">
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className="avatar1" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

Profile.defaultProps = {
  avatar: img,
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

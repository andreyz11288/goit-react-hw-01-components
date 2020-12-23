// import logo from './logo.svg';
import React from 'react';
import './Profile.css';


function Profile({data}) {
  return (
    <div className="Profile">
     <div className="description">
    <img
      src={data.avatar}
      alt="Аватар пользователя"npm onAnimationStart
      className="avatar"
    />
    <p className="name">{data.name}</p>
    <p className="tag">@{data.tag}</p>
    <p className="location">{data.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{data.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{data.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{data.stats.likes}</span>
    </li>
  </ul>
    </div>
  );
}

export default Profile;

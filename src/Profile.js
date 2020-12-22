// import logo from './logo.svg';
import React from 'react';
import './App.css';


function Profile({data}) {
  return (
    <div className="Profile">
     <div class="description">
    <img
      src={data.avatar}
      alt="Аватар пользователя"npm onAnimationStart
      class="avatar"
    />
    <p class="name">{data.name}</p>
    <p class="tag">@{data.tag}</p>
    <p class="location">{data.location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{data.stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{data.stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{data.stats.likes}</span>
    </li>
  </ul>
    </div>
  );
}

export default Profile;

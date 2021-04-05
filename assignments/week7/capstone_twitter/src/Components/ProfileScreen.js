import React from 'react';
import './ProfileScreen.css';
const ProfileScreen = () => {
  return (
    <div>
      <div className="title-container">
        <img src='https://img.icons8.com/fluent/64/000000/twitter.png' alt="logo"/>
        <h1>Welcome To Twitter</h1>
      </div>
      <div className="ProfileScreen-container">
        <div>
          <img className="ProfileScreen-pics" src="https://previews.123rf.com/images/dolgachov/dolgachov1406/dolgachov140601520/29037389-business-success-technology-and-office-concept-smiling-business-team-with-laptop-computer-papers-and.jpg" alt="computer" />
          <h1 className="ProfileScreen-text">Connect With Us</h1>
          <h3 className="ProfileScreen-text">Connect from all over the world!</h3>
        </div>
        <div>
          <img className="ProfileScreen-pics" src="https://i.redd.it/zahp29vye6801.jpg" alt="map" />
          <h1 className="ProfileScreen-text">Explore With Us</h1>
          <h3 className="ProfileScreen-text">Let go and explore all that is avaliable.</h3>
        </div>
        <div>
          <img className="ProfileScreen-pics" src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_869285818_373113.jpg" alt="meeting" />
          <h1 className="ProfileScreen-text"></h1>
          <h3 className="home-text"></h3>
        </div>
      </div>
  </div>
  );
}
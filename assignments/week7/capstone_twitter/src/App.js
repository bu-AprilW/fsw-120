import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProfileScreen from './components//ProfileScreen/ProfileScreen';
import TweetItem from './components/TweetItem/TweetItem';
import LoginScreen from './components/LoginScreen/LoginScreen';

const App = () => {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path='/' component={ProfileScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/tweets' component={TweetItem}/>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import Profile from './components/Profile';

import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path={'/'} component={Search} />
            <Route exact path={'/profile/:platform/:gamertag'} component={Profile} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

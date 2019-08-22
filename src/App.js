import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import NoMatchPage from './pages/404/404.component';

import './App.css';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='./shop'>Shop</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  );
};

export default App;

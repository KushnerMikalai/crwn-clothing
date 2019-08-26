import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import NoMatchPage from './pages/404/404.component';
import Header from "./components/header/header.component";
import './App.scss';

const App = () => {
  return (
    <div className={'app'}>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  );
};

export default App;

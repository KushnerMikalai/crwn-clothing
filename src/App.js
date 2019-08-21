import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
};

const HatsPageDetails = (props) => {
  console.log(props);
  return (
    <div className='container'>
      <h1>{props.match.params.id}</h1>
      <div>HATS PAGE Details => <strong>{props.match.params.id}</strong></div>
    </div>
  )
};

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/hats'>Hats</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route path='/hats/:id' component={HatsPageDetails} />
      </Switch>
      {/*<HomePage/>*/}
    </div>
  );
};

export default App;

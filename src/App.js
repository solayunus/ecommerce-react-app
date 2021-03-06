import React from 'react';
import {Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header/header-component';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.components';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
      
    </div>
  );
}

export default App;

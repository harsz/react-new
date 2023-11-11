import React from 'react';
import './App.css';
import Header from './components/header';
// import CostCenter from './components/costCenter';
import Home from './components/home';
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import CostCenter from './components/costCenter';

//Landing 
const App = () => {
  return (
  <HashRouter>
  <Switch> 
  <div>
  <Header />
  <Route path="/"  exact component={Home} />
  <Route path="/costcenter" exact component={CostCenter} />

  </div>
  </Switch>  
  </HashRouter>
  ); 
};

export default App;

import React from 'react';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { mainRoutes } from './Routes'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Router>
    <Switch>
      <Route render={routeProps=><App {...routeProps}/>}/>
      {mainRoutes.map(route=>{
        return <Route key={route.path} {...route}/> 
      })}
      <Redirect to="/404"/>
    </Switch>
  </Router>
);


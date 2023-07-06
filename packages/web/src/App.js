import { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from './Routes';
import Frame from './components/Frame';

export default class App extends Component{
  render(){
    return(
      <Frame>
        <Switch>
          {adminRoutes.map(route=>{
            return(
              <Route 
                key={route.path} 
                path={route.path} 
                exact={route.exact} 
                render={routeprops=>{
                return <route.component  {...routeprops} />;
              }}
              />
            );
          })}
          <Redirect to="/404"/>
        </Switch>
      </Frame>
    )
  }
}

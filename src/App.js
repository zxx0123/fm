import React, { Component } from 'react';
import home from './views/home'
import dils from './views/dils'
import mini from './views/mini'

import {Route,Switch,Redirect} from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Switch>
          <Route path='/home' component={home}></Route>
          <Route path='/dils' component={dils}></Route>
          <Route path='/mini' component={mini}></Route>
          <Redirect from='/' to='home'></Redirect>          
        </Switch>
      </div>
    );
  }
}

export default App;

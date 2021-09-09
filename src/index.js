import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './pages/Menu/index';
import Kids from './pages/Kids';
import Activities from './pages/Activities/index';
import addKid  from './pages/addKid/index';
import addActivity  from './pages/addActivity/index';
import ImagesWords  from './pages/ImagesWords/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Menu} />
      <Route exact path='/Kids' component={Kids} />
      <Route exact path='/Activities' component={Activities} />
      <Route exact path='/addKid' component={addKid} />
      <Route exact path='/addActivity' component={addActivity} />
      <Route exact path='/ImagesWords' component={ImagesWords} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

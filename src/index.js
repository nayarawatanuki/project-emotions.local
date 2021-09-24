import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

import PrincipalMenu from './pages/Principal-Menu/index';

import KidAcess from './pages/KidAcess/Menu/index';
import TaskImgWords from './pages/KidAcess/TaskImgWords/index';

//Pages PsycAcess
import PsycAcess from './pages/PsycAcess/Menu/index';
import Kids from './pages/PsycAcess/Kids/index';
import Activities from './pages/PsycAcess/Activities/index';
import addKid  from './pages/PsycAcess/addKid/index';
import addActivity  from './pages/PsycAcess/addActivity/index';
//import ImagesWords  from './pages/PsycAcess/ImagesWords/index';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/Main" exact={true} component={PrincipalMenu} />

      <Route path="/KidAcess" exact={true} component={KidAcess} />
      <Route path="/TaskImgWords" exact={true} component={TaskImgWords} />

      <Route path="/PsycAcess" exact={true} component={PsycAcess} />,
      <Route path="/Kids" exact={true} component={Kids} />,
      <Route path="/Activities" exact={true} component={Activities} />,
      <Route path="/addKid" exact={true} component={addKid} />,
      <Route path="/addActivity" exact={true} component={addActivity} />,

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
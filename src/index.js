import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

import PrincipalMenu from './frontend/pages/Principal-Menu/index';

import KidAcess from './frontend/pages/KidAcess/Menu/index';
import TaskImgWords from './frontend/pages/KidAcess/TaskImgWords/index';

//Pages PsycAcess
import PsycAcess from './frontend/pages/PsycAcess/Menu/index';
import Kids from './frontend/pages/PsycAcess/Kids/index';
import Activities from './frontend/pages/PsycAcess/Activities/index';
import addKid  from './frontend/pages/PsycAcess/addKid/index';
import addActivity  from './frontend/pages/PsycAcess/addActivity/index';
//import ImagesWords  from './frontend/pages/PsycAcess/ImagesWords/index';

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
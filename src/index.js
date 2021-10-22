import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

import PrincipalMenu from './frontend/pages/Principal-Menu/index';

import KidAcess from './frontend/pages/KidAcess/Menu/index';
import Tasks from './frontend/pages/KidAcess/Tasks/index';
import TaskImgEmotion from './frontend/pages/KidAcess/TaskImgEmotion/index';

//Pages PsycAcess
import PsycAcess from './frontend/pages/PsycAcess/Menu/index';
import Kids from './frontend/pages/PsycAcess/Kids/index';
import Activities from './frontend/pages/PsycAcess/Activities/index';
import addKid  from './frontend/pages/PsycAcess/addKid/index';
import addActivity  from './frontend/pages/PsycAcess/addActivity/index';
import addImgEmotion  from './frontend/pages/PsycAcess/addImgEmotion/index';
import KidProvider  from './frontend/context/kidContext';
import TaskProvider  from './frontend/context/taskContext';

ReactDOM.render(
  <KidProvider>
    <TaskProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/Main" exact={true} component={PrincipalMenu} />

          <Route path="/KidAcess" exact={true} component={KidAcess} />
          <Route path="/Tasks" exact={true} component={Tasks} />
          <Route path="/TaskImgEmotion" exact={true} component={TaskImgEmotion} />

          <Route path="/PsycAcess" exact={true} component={PsycAcess} />,
          <Route path="/Kids" exact={true} component={Kids} />,
          <Route path="/Activities" exact={true} component={Activities} />,
          <Route path="/addKid" exact={true} component={addKid} />,
          <Route path="/addActivity" exact={true} component={addActivity} />,      
          <Route path="/addImgEmotion" exact={true} component={addImgEmotion} />,      


        </Switch>
      </BrowserRouter>
    </TaskProvider>
  </KidProvider>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './pages/Menu/index';
import Kids from './pages/Kids/index';
import Activities from './pages/Activities/index';
import addKid  from './pages/addKid/index';
import addActivity  from './pages/addActivity/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component = {Menu}/>
      <Route exact path='/Kids' component = {Kids}/>
      <Route exact path='/Activities' component = {Activities}/>
      <Route exact path='/addKid' component = {addKid}/>
      <Route exact path='/addActivity' component = {addActivity}/>
    </Switch>
  </BrowserRouter>,
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

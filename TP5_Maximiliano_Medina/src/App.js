import React from 'react';
import Users from './users/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './app.module.css';
import Form from './form/index';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Users}></Route>
          <Route exact path="/usuarios" component={Users}></Route>
          <Route exact path="/formulario" component={Form}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
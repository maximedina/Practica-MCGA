import React from 'react';
import Sidebar from './sidebar/index';
import Counters from './counters/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import css from './app.module.css';

class App extends React.Component {

  render() {
    return (
      <div className={css.app}>
        <Router>
          <Switch>

            <Route path="/home" component={Sidebar} />
            <Route path="/contadores">
              <Counters />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;









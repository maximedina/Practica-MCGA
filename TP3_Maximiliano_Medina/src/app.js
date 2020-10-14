import React from 'react';
import Sidebar from './sidebar/sidebar';
import Counters from './counters/counters';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import css from './app.module.css';

class App extends React.Component {
  state = {
    counters: [],
  }

  render() {
    return (
      <div className={css.app}>
        <Router>
          <Switch>
            <Route path="/home"
              render={(routeProps) => <Sidebar addCounter={this.addCounter} {...routeProps} />}
            />
            <Route path="/contadores">
              <Counters
                counters={this.state.counters}
                delCounter={this.delCounter}
                increase={this.increase}
                decrease={this.decrease}
              />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </Router>
      </div>
    );
  }

  addCounter = () => {
    const newCounter = this.state.counters
    newCounter.push({
      created: new Date().toLocaleString(),
      modified: new Date().toLocaleString(),
      count: 0,
    })
    this.setState({ counters: newCounter, })
  }

  delCounter = (counterIndex) => {
    const counterList = this.state.counters.filter((counter, index) => {
      if (counterIndex === index) {
        return false
      }
      return true
    })
    this.setState({ counters: counterList, })
  }

  increase = (counterIndex) => {
    const counterList = this.state.counters.map((counter, index) => {
      if (counterIndex === index) {
        return {
          created: counter.created,
          modified: new Date().toLocaleString(),
          count: counter.count + 1
        }
      }
      return counter
    })
    this.setState({ counters: counterList, })
  }

  decrease = (counterIndex) => {
    const counterList = this.state.counters.map((counter, index) => {
      if (counterIndex === index) {
        return {
          created: counter.created,
          modified: new Date().toLocaleString(),
          count: counter.count - 1
        }
      }
      return counter
    })
    this.setState({ counters: counterList, })
  }
}
export default App;









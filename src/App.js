import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styles from './App.module.css';
import Nav from './Nav';
import Repository from './Repository';
import RepoDetail from './RepoDetail';
import ErrorPage from './ErrorPage';
import ErrorBound from './ErrorBound';




function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Repository} />
            <Route path="/repos/:repoName" component={RepoDetail} />
            <Route path="/errorbound" component={ErrorBound} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

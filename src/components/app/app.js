import React from 'react';
import Header from '../header';
import Users from '../users';
import { Redirect, Route, Switch } from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Redirect exact from="/" to="/users" />
          <Route path="/users" component={Users} />
          <Route path="/" component={() => '404 - not found'} />
        </Switch>
      </div>
    );
  }
  componentDidCatch(error) {
    console.log('error');
  }
}

export default App;
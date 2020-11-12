import React from 'react';
import Header from '../header';
import Users from '../users';
import { Redirect } from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Redirect exact from="/" to="/users" />
        <Users></Users>
      </div>
    );
  }
  componentDidCatch(error) {
    console.log('error');
  }
}

export default App;

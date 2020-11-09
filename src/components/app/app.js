import React from 'react';
import Header from '../header';
import Users from '../users';
import { Redirect } from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Redirect exact from="/" to="/users" />
      <Users></Users>
    </div>
  );
};

export default App;

import React from 'react'
import Header from '../header'
import Users from '../users'
import { Redirect, Route, Switch } from 'react-router-dom'
import Toolbar from '../toolbar'
import Footer from '../footer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Toolbar />
        <Switch>
          <Redirect exact from="/" to="/users" />
          {/* При переходе на начальную страницу происходит редирект на страницу пользователей */}
          <Route path="/users" component={Users} />
          <Route path="/" component={() => '404 - not found'} />
        </Switch>
        <Footer/>
      </div>
    )
  }
  componentDidCatch(error) {
    console.log('error')
  }
}

export default App

import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import About from './test/About'
import Address from './test/Address'
import Admin from './test/Admin'
import Home from './test/Home'
import Nav from './test/Nav'
import NotFound from './test/NotFound'
import Products from './test/Products'
import User from './test/User'

export default class AppTest extends Component {
  render() {
    return (
      <>
        <Nav />
        <Switch>
            <Route exact path="/" render={(props) => <Home {...props} title="title"/>}/>
            <Route path="/about/:year?/:month?" component={About}/>
            <Route path="/products" component={Products}/>
            <Route  path="/address/user" component={User}/>
            <Route path="/address/admin" component={Admin}/>
            <Route path="/address" component={Address}/>
            

            <Route path="/not-found" component={NotFound}/>
            <Redirect to='not-found'/>
        </Switch>
      </>
    )
  }
}

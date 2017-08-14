/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/11/17.
 */

'use strict';
import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import CustomerList from './customer/CustomerList';
import CustomerEdit from './customer/CustomerEdit';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Tesabot example</Link>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><NavLink activeClassName="active" to="/customers">Customers</NavLink></li>
                <li><NavLink activeClassName="active" to="/customers/new">New Customer</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/customers" component={CustomerList}/>
            <Route path="/customers/:id" component={CustomerEdit}/>
          </Switch>
        </div>
      </div>
    )
  }
}
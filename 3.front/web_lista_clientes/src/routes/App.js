import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../utils/history';
import Layout from '../containers/Layout';
import Styles from '../components/Styles';
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Client from '../components/Client';
import HandleCreditCard from '../components/HandleCreditCard';
import CreditCard from '../components/CreditCard';
import { setBreadCrumbAndReport } from '../actions';

const App = (props) => {
  history.listen((location) => {
    props.setBreadCrumbAndReport(location);
    window.scrollTo(0, 0);
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={['/']}>
          <Route exact path='/' component={Login} />
        </Route>
        <Route exact path={['/signup']}>
          <Route exact path='/signup' component={Signup} />
        </Route>
        <Route exact path={['/home']}>
          <Layout>
            <Route exact path='/home' component={Home} />
          </Layout>
        </Route>
        <Route exact path={['/creditCard']}>
          <Layout>
            <Route exact path='/creditCard' component={CreditCard} />
          </Layout>
        </Route>
        <Route exact path={['/handleCreditCard']}>
          <Layout>
            <Route exact path='/handleCreditCard' component={HandleCreditCard} />
          </Layout>
        </Route>
        <Route exact path={['/client']}>
          <Layout>
            <Route exact path='/client' component={Client} />
          </Layout>
        </Route>

        <Route exact path={['/styles']}>
          <Route exact path='/Styles' component={Styles} />
        </Route>
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = {
  setBreadCrumbAndReport,
};

export default connect(null, mapDispatchToProps)(App);

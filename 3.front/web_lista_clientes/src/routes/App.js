import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../utils/history';
import Layout from '../containers/Layout';
import Styles from '../components/Styles';
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
          <Layout>
            <Route exact path='/' component={Styles} />
          </Layout>
        </Route>

        <Route exact path={['/Styles']}>
          <Route exact path='/Styles' component={Styles} />
        </Route>

        {/* <Route exact path={['/mailbox']}>
          <Layout>
            <Route exact path='/mailbox' component={MailBox} />
          </Layout>
        </Route> */}
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = {
  setBreadCrumbAndReport,
};

export default connect(null, mapDispatchToProps)(App);

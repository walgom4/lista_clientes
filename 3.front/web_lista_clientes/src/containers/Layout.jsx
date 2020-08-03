import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import '../assets/styles/components/general/Loading.scss';

const Layout = (props) => {
  const { children, loading } = props;
  return (
    <div className=''>
      <Header />

      <div className='app-main scroll_main' id='contentscroll'>
        {children}
      </div>

      {loading && (
        <div className='loading'>
          <div className='spinner' />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { loading } = state.layout;
  return {
    loading,
  };
};

export default connect(mapStateToProps, null)(Layout);

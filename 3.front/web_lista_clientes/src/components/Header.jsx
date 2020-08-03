import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setErrorModal } from '../actions';

const Header = (props) => {

  return (
    <>
      <div className='top_bar-single'>
        <Link to='/' className='logo' />
        <div className='horizontal-list'>
          <ul>
            <li>
              <Link to='/' className='Normal-1'>uno</Link>
            </li>
            <li>
              <Link to='/' className='Normal-1'>uno</Link>
            </li>
            <li>
              <Link to='/' className='Normal-1'>uno</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { errorModal } = state.layout;
  return {
    errorModal,
  };
};

const mapDispatchToProps = {
  setErrorModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

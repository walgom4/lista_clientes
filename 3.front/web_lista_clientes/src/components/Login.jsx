import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FaTimes, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import Header from './Header';
import ErrorBoundary from '../generics/ErrorBoundary';

const Login = (props) => {
  useEffect(() => {}, []);
  return (
    <>
      <div
        className='offset-lg-4 col-lg-12 offset-md-3 col-md-12 offset-sm-0 col-sm-12'
        style={{ paddingTop: '80px' }}
      >
        <div className='card col-lg-4 col-md-6'>
          <div className='Title-1 form-group'>Login</div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Usuario
              </label>
              <input
                id='exampleEmail'
                className='input-default col-md-12'
                type='text'
                placeholder='Email'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Password
              </label>
              <input
                id='exampleEmail'
                className='input-default col-md-12'
                type='text'
                placeholder='Email'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <a href='/Signup'>Registrarse</a>
            </div>
          </div>
          <div className='row button-end'>
            <div className='l-button p-buttonenable'>Enviar</div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading } = state.layout;
  return {
    loading,
  };
};

const mapDispatchToprops = {};

export default connect(mapStateToProps, mapDispatchToprops)(Login);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestLogin, requestUser } from '../actions/operations';
import history from '../utils/history';
import { setLoginMessage } from '../actions';

const Login = (props) => {
  const { loginMessage } = props;
  useEffect(() => {}, []);
  const [loginState, setState] = useState({
    varDisplay: false,
  });

  const handleOnChange = (event) => {
    event.persist();
    if (event) {
      const { name, value } = event.target;
      setState({
        ...loginState,
        [name]: value,
      });
    }
  };

  const send = (event) => {
    event.persist();
    if (event) {
      console.log(loginState);
      props.requestLogin(loginState, function (response) {
        if (response.key) {
          console.log(response);
          props.setLoginMessage('');
          props.requestUser(response.key, function (response) {
            history.push('/home');
          });
        } else {
          setState({
            ...loginState,
            varDisplay: true,
          });
        }
      });
    }
  };
  return (
    <>
      <div
        className='offset-lg-4 col-lg-12 offset-md-3 col-md-12 offset-sm-0 col-sm-12'
        style={{ paddingTop: '80px' }}
      >
        <div className='card col-lg-4 col-md-6'>
          <div className='Title-1 form-group'>Login</div>
          <div className='row' style={{ display: loginMessage === '' ? 'none' : 'block' }}>
            <div className='col-md-12 form-group'>
              <div className='status-notification nt-success'>
                <span>{loginMessage}</span>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='username' className='Normal-1'>
                Usuario
              </label>
              <input
                id='username'
                name='username'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='password' className='Normal-1'>
                Password
              </label>
              <input
                id='password'
                name='password'
                className='input-default col-md-12'
                type='password'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className='row' style={{ display: loginState.varDisplay ? 'block' : 'none' }}>
            <div className='col-md-12 form-group'>
              <div className='status-notification nt-danger'>
                <span>No se pudo procesar la solicitud, verifique sus datos.</span>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <Link to='/Signup' className='Normal-1'>
                Registrarse
              </Link>
            </div>
          </div>
          <div className='row button-end'>
            <div className='l-button p-buttonenable' role='button' type='submit' onClick={send}>
              Ingresar
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, loginMessage } = state.layout;
  return {
    loading,
    loginMessage,
  };
};

const mapDispatchToprops = {
  requestLogin,
  setLoginMessage,
  requestUser,
};

export default connect(mapStateToProps, mapDispatchToprops)(Login);

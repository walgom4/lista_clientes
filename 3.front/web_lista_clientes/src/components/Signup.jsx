import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestSignup } from '../actions/operations';
import history from '../utils/history';
import { setLoginMessage } from '../actions';

const Signup = (props) => {
  useEffect(() => {}, []);

  const [signupState, setState] = useState({
    varDisplay: false,
  });

  const handleOnChange = (event) => {
    event.persist();
    if (event) {
      const { name, value } = event.target;
      setState({
        ...signupState,
        [name]: value,
      });
    }
  };
  const send = (event) => {
    event.persist();
    if (event) {
      console.log(signupState);
      props.requestSignup(signupState, function (response) {
        if (response.username != null) {
          console.log(response);
          props.setLoginMessage('El usuario ha sido creado');
          history.push('/');
        } else {
          setState({
            ...signupState,
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
          <div className='Title-1 form-group'>Registro</div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Usuario
              </label>
              <input
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
              <label htmlFor='exampleEmail' className='Normal-1'>
                Nombre
              </label>
              <input
                name='first_name'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Apellido
              </label>
              <input
                name='last_name'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Correo
              </label>
              <input
                name='email'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Clave
              </label>
              <input
                name='password'
                className='input-default col-md-12'
                type='password'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className='row' style={{ display: signupState.varDisplay ? 'block' : 'none' }}>
            <div className='col-md-12 form-group'>
              <div className='status-notification nt-danger'>
                <span>No se pudo crear el usuario</span>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <Link to='/' className='Normal-1'>
                Volver
              </Link>
            </div>
          </div>
          <div className='row button-end'>
            <div className='l-button p-buttonenable' role='button' type='submit' onClick={send}>
              Enviar
            </div>
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

const mapDispatchToprops = {
  requestSignup,
  setLoginMessage,
};

export default connect(mapStateToProps, mapDispatchToprops)(Signup);

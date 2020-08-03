import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Signup = (props) => {
  useEffect(() => {}, []);

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
                id='exampleEmail'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Nombre
              </label>
              <input
                id='exampleEmail'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Apellido
              </label>
              <input
                id='exampleEmail'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Correo
              </label>
              <input
                id='exampleEmail'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Clave
              </label>
              <input
                id='exampleEmail'
                className='input-default col-md-12'
                type='password'
                placeholder='Ingrese un valor'
              />
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

export default connect(mapStateToProps, mapDispatchToprops)(Signup);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Client = (props) => {
  useEffect(() => {}, []);

  return (
    <>
      <div
        className='col-md-12'
        style={{ paddingTop: '10px' }}
      >
        <div className='row'>
          <div className='col-md-12 form-group'>
            <Link to='/home' className='Normal-1'>
              Volver
            </Link>
          </div>
        </div>
        <div className='card col-md-12'>
          <div className='Title-1 form-group'>Cliente</div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Identificación
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
                Teléfono
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
                Dirección
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
                Página web
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
                Notas
              </label>
              <input
                id='exampleEmail'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
              />
            </div>
          </div>

          <div className='row button-end'>
            <div className='l-button p-buttonenable'>Agregar</div>
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

export default connect(mapStateToProps, mapDispatchToprops)(Client);

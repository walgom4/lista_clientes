import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Client = (props) => {
  useEffect(() => {}, []);

  return (
    <>
      <div className='col-md-12' style={{ paddingTop: '10px' }}>
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
                Nombre
              </label>
              <input
                className='input-default col-md-12'
                type='text'
                placeholder='Buscar solicitudes pendientes'
                disabled
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Apellido
              </label>
              <input
                className='input-default col-md-12'
                type='text'
                placeholder='Buscar solicitudes pendientes'
                disabled
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Tipo de tarjeta
              </label>
              <select id='country' name='country' className='select-default col-md-12'>
                <option value='1'>Visa</option>
                <option value='2'>Master Card</option>
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Número de la tarjeta
              </label>
              <input
                className='input-default col-md-12'
                type='text'
                maxLength='16'
                placeholder='Ingrese un valor'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Fecha de vencimiento
              </label>
              <input
                className='input-default col-md-12'
                type='date'
                placeholder='Ingrese un valor'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                CVV
              </label>
              <input
                className='input-default col-md-12'
                type='password'
                maxLength='3'
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

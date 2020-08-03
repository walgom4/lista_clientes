import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestCreateClient, requestUpdateClient } from '../actions/operations';
import { setCurrentClient } from '../actions';

const Client = (props) => {
  const { token, currentClient, currentUser } = props;
  const [clientState, setState] = useState({
    varDisplay: false,
    varDisplaySuccess: false,
    ...currentClient,
  });
  useEffect(() => {}, []);

  const handleOnChange = (event) => {
    event.persist();
    if (event) {
      const { name, value } = event.target;
      setState({
        ...clientState,
        [name]: value,
      });
    }
  };

  const clearData = (event) => {
    props.setCurrentClient({});
  };

  const send = (event) => {
    event.persist();
    if (event) {
      console.log(clientState);
      if (clientState.id) {
        props.requestUpdateClient(clientState, token, clientState.id, function (response) {
          if (response.email != null) {
            console.log(response);
            setState({
              ...clientState,
              varDisplaySuccess: true,
            });
          } else {
            setState({
              ...clientState,
              varDisplay: true,
            });
          }
        });
      } else {
        props.requestCreateClient(clientState, token, currentUser.id, function (response) {
          if (response.email != null) {
            console.log(response);
            setState({
              ...clientState,
              varDisplaySuccess: true,
            });
          } else {
            setState({
              ...clientState,
              varDisplay: true,
            });
          }
        });
      }
    }
  };

  return (
    <>
      <div className='col-md-12' style={{ paddingTop: '10px' }}>
        <div className='row'>
          <div className='col-md-12 form-group'>
            <Link onClick={clearData} to='/home' className='Normal-1'>
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
                id='identification'
                name='identification'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
                defaultValue={currentClient.identification}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Nombre
              </label>
              <input
                id='first_name'
                name='first_name'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
                defaultValue={currentClient.first_name}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Apellido
              </label>
              <input
                id='last_name'
                name='last_name'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
                defaultValue={currentClient.last_name}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Correo
              </label>
              <input
                id='email'
                name='email'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
                defaultValue={currentClient.email}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Teléfono
              </label>
              <input
                id='phone'
                name='phone'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
                defaultValue={currentClient.phone}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Dirección
              </label>
              <input
                id='address'
                name='address'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
                defaultValue={currentClient.address}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Página web
              </label>
              <input
                id='web'
                name='web'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
                defaultValue={currentClient.web}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='exampleEmail' className='Normal-1'>
                Notas
              </label>
              <input
                id='notes'
                name='notes'
                className='input-default col-md-12'
                type='text'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
                defaultValue={currentClient.notes}
              />
            </div>
          </div>
          <div className='row' style={{ display: clientState.varDisplay ? 'block' : 'none' }}>
            <div className='col-md-12 form-group'>
              <div className='status-notification nt-danger'>
                <span>No se pudo procesar la petición</span>
              </div>
            </div>
          </div>
          <div
            className='row'
            style={{ display: clientState.varDisplaySuccess ? 'block' : 'none' }}
          >
            <div className='col-md-12 form-group'>
              <div className='status-notification nt-success'>
                <span>Petición procesada con éxito</span>
              </div>
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
  const { token, currentClient, currentUser } = state.layout;
  return {
    token,
    currentClient,
    currentUser,
  };
};

const mapDispatchToprops = {
  requestCreateClient,
  requestUpdateClient,
  setCurrentClient,
};

export default connect(mapStateToProps, mapDispatchToprops)(Client);

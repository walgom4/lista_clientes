import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestCreateCreditCard, requestUpdateCreditCard } from '../actions/operations';
import { setCurrentCreditCard } from '../actions';

const HandleCreditCard = (props) => {
  const { token, currentClient, currentUser, currentCreditCard } = props;
  const [HandleCreditCardState, setState] = useState({
    varDisplay: false,
    varDisplaySuccess: false,
    ...currentCreditCard,
  });

  useEffect(() => {}, []);

  const handleOnChange = (event) => {
    event.persist();
    if (event) {
      const { name, value } = event.target;
      if (name !== 'first_name' && name !== 'last_name') {
        setState({
          ...HandleCreditCardState,
          [name]: value,
        });
      }
    }
  };

  const clearData = (event) => {
    props.setCurrentCreditCard({});
  };

  const send = (event) => {
    event.persist();
    if (event) {
      console.log(HandleCreditCardState);
      if (HandleCreditCardState.id) {
        props.requestUpdateCreditCard(
          HandleCreditCardState,
          token,
          HandleCreditCardState.id,
          function (response) {
            if (response.id != null) {
              console.log(response);
              setState({
                ...HandleCreditCardState,
                varDisplaySuccess: true,
              });
            } else {
              setState({
                ...HandleCreditCardState,
                varDisplay: true,
              });
            }
          },
        );
      } else {
        props.requestCreateCreditCard(HandleCreditCardState, token, currentClient.id, function (
          response,
        ) {
          if (response.id != null) {
            console.log(response);
            setState({
              ...HandleCreditCardState,
              varDisplaySuccess: true,
            });
          } else {
            setState({
              ...HandleCreditCardState,
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
            <Link onClick={clearData} to='/creditCard' className='Normal-1'>
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
                id='first_name'
                name='first_name'
                className='input-default col-md-12'
                type='text'
                placeholder='Buscar solicitudes pendientes'
                disabled
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
                placeholder='Buscar solicitudes pendientes'
                disabled
                onChange={handleOnChange}
                defaultValue={currentClient.last_name}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='fk_cardType' className='Normal-1'>
                Tipo de tarjeta
              </label>
              <select
                id='fk_cardType'
                name='fk_cardType'
                className='select-default col-md-12'
                onChange={handleOnChange}
                defaultValue={currentCreditCard.fk_cardType}
              >
                <option value=''>--Seleccione--</option>
                <option>VISA</option>
                <option>Master Card</option>
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='numberCard' className='Normal-1'>
                Número de la tarjeta
              </label>
              <input
                id='numberCard'
                name='numberCard'
                className='input-default col-md-12'
                type='text'
                maxLength='16'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
                defaultValue={currentCreditCard.numberCard}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='date' className='Normal-1'>
                Fecha de vencimiento
              </label>
              <input
                id='date'
                name='date'
                className='input-default col-md-12'
                type='date'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
                defaultValue={currentCreditCard.date}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              <label htmlFor='cvv' className='Normal-1'>
                CVV
              </label>
              <input
                id='cvv'
                name='cvv'
                className='input-default col-md-12'
                type='password'
                maxLength='3'
                placeholder='Ingrese un valor'
                onChange={handleOnChange}
                defaultValue={currentCreditCard.cvv}
              />
            </div>
          </div>
          <div className='row' style={{ display: HandleCreditCardState.varDisplay ? 'block' : 'none' }}>
            <div className='col-md-12 form-group'>
              <div className='status-notification nt-danger'>
                <span>No se pudo procesar la petición</span>
              </div>
            </div>
          </div>
          <div
            className='row'
            style={{ display: HandleCreditCardState.varDisplaySuccess ? 'block' : 'none' }}
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
  const { token, currentClient, currentUser, currentCreditCard } = state.layout;
  return {
    token,
    currentClient,
    currentUser,
    currentCreditCard,
  };
};

const mapDispatchToprops = {
  setCurrentCreditCard,
  requestCreateCreditCard,
  requestUpdateCreditCard,
};

export default connect(mapStateToProps, mapDispatchToprops)(HandleCreditCard);

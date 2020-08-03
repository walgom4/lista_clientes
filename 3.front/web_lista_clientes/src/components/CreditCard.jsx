import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaMinus, FaCog } from 'react-icons/fa';
import { requestCreditCardByClient, requestRetrieveCreditCard } from '../actions/operations';
import history from '../utils/history';

const CreditCard = (props) => {
  const { token, currentCreditCard, currentUser, currentClient, creditCards } = props;
  const [creditCardState, setState] = useState({
    varDisplay: false,
    varDisplaySuccess: false,
    ...currentCreditCard,
  });

  useEffect(() => {
    props.requestCreditCardByClient(token, currentClient.id, function (response) {
      if (Array.isArray(response)) {
        console.log('ok');
      } else {
        setState({
          ...creditCardState,
          varDisplay: true,
        });
      }
    });
  }, []);

  const sendRetrieve = (id) => {
    if (id) {
      props.requestRetrieveCreditCard(token, id, function (response) {
        console.log(response);
        if (response.id) {
          history.push('/handleCreditCard');
        } else {
          setState({
            ...creditCardState,
            varDisplay: true,
          });
        }
      });
    }
  };

  return (
    <>
      <div className='col-md-12' style={{ paddingTop: '20px' }}>
        <Link to='/home' className='Normal-1'>
          Volver
        </Link>
        <div className='row'>
          <div className='Title-1'>Tarjetas de credito</div>
        </div>
        <div className='row button-end'>
          <Link to='/handleCreditCard' className='l-button p-buttonenable'>
            Agregar
          </Link>
        </div>
        <div className='row' style={{ display: creditCardState.varDisplay ? 'block' : 'none' }}>
          <div className='col-md-12 form-group'>
            <div className='status-notification nt-danger'>
              <span>No se pudo procesar la petición</span>
            </div>
          </div>
        </div>
        <table className='card datatable col-sm-12'>
          <tr>
            <th>Tipo</th>
            <th>Numero</th>
            <th>Fecha Vencimiento</th>
            <th>CVV</th>
            <th>Opciones</th>
          </tr>
          {creditCards.map((urow, index) => {
            return (
              <tr key={urow.identification + index}>
                <td>{urow.fk_cardType}</td>
                <td>{urow.numberCard}</td>
                <td>{urow.date}</td>
                <td>***</td>
                <td>
                  <div className='row'>
                    <div
                      className='c-button i-buttonenable'
                      role='button'
                      type='submit'
                      onClick={() => sendRetrieve(urow.id)}
                    >
                      <FaCog />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { token, currentCreditCard, currentUser, currentClient, creditCards } = state.layout;
  return {
    token,
    currentCreditCard,
    currentUser,
    currentClient,
    creditCards,
  };
};

const mapDispatchToprops = {
  requestCreditCardByClient,
  requestRetrieveCreditCard,
};

export default connect(mapStateToProps, mapDispatchToprops)(CreditCard);

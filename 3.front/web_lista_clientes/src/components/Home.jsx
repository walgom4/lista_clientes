import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FaMinus, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import history from '../utils/history';
import { requestClient, requestRetrieveClient } from '../actions/operations';
import { setCurrentClient } from '../actions';

const Home = (props) => {
  const { token, clients } = props;
  const [homeState, setState] = useState({
    varDisplay: false,
  });
  useEffect(() => {
    props.requestClient(token, function (response) {
      if (Array.isArray(response)) {
        console.log('ok');
      } else {
        setState({
          ...homeState,
          varDisplay: true,
        });
      }
    });
  }, []);

  const sendRetrieve = (id) => {
    if (id) {
      props.requestRetrieveClient(token, id, function (response) {
        console.log(response);
        if (response.identification) {
          history.push('/client');
        } else {
          setState({
            ...homeState,
            varDisplay: true,
          });
        }
      });
    }
  };
  const navigateCreditCard = (currentClient) => {
    history.push('/creditCard');
    props.setCurrentClient(currentClient)
  };

  return (
    <>
      <div className='col-md-12' style={{ paddingTop: '20px' }}>
        <div className='row'>
          <div className='Title-1'>Clientes</div>
        </div>
        <div className='row button-end'>
          <Link to='/client' className='l-button p-buttonenable'>
            Agregar
          </Link>
        </div>
        <div className='row' style={{ display: homeState.varDisplay ? 'block' : 'none' }}>
          <div className='col-md-12 form-group'>
            <div className='status-notification nt-danger'>
              <span>No se pudo procesar la petición</span>
            </div>
          </div>
        </div>

        <table className='card datatable col-sm-12'>
          <tr>
            <th>Identificación</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Página web</th>
            <th>Notas</th>
            <th>T. Crédito</th>
            <th>Opciones</th>
          </tr>
          {clients.map((urow, index) => {
            return (
              <tr key={urow.identification + index}>
                <td>{urow.identification}</td>
                <td>{urow.first_name}</td>
                <td>{urow.last_name}</td>
                <td>{urow.email}</td>
                <td>{urow.phone}</td>
                <td>{urow.address}</td>
                <td>{urow.web}</td>
                <td>{urow.notes}</td>
                <td>
                  <div className='row'>
                    <div className='c-button i-buttonenable'
                      role='button'
                      type='submit'
                      onClick={() => navigateCreditCard(urow)}>
                      <FaCog />
                    </div>
                  </div>
                </td>
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
          {/* <tr>
            <td>Jill</td>
            <td>Jill</td>
            <td>Jill</td>
            <td>Jill</td>
            <td>Jill</td>
            <td>Jill</td>
            <td>Jill</td>
            <td>Jill</td>
            <td>
              <div className='row'>
                <div className='c-button i-buttonenable'>
                  <FaCog />
                </div>
              </div>
            </td>
            <td>
              <div className='row'>
                <div className='c-button i-buttonenable'>
                  <FaCog />
                </div>
                <div className='c-button i-buttonenable'>
                  <FaMinus />
                </div>
              </div>
            </td>
          </tr> */}
        </table>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { token, clients } = state.layout;
  return {
    token,
    clients,
  };
};

const mapDispatchToprops = {
  requestClient,
  requestRetrieveClient,
  setCurrentClient,
};

export default connect(mapStateToProps, mapDispatchToprops)(Home);

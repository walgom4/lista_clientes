import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FaTimes, FaEye, FaPlus, FaMinus, FaCog } from 'react-icons/fa';

const Home = (props) => {
  useEffect(() => {}, []);

  return (
    <>
      <div className='col-md-12' style={{ paddingTop: '20px' }}>
        <div className='row'>
          <div className='Title-1'>Clientes</div>
        </div>
        <div className='row button-end'>
          <div className='l-button p-buttonenable'>Agregar</div>
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
          <tr>
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
          </tr>
        </table>
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

export default connect(mapStateToProps, mapDispatchToprops)(Home);

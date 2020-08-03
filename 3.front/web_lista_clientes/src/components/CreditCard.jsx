import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTimes, FaEye, FaPlus, FaMinus, FaCog } from 'react-icons/fa';

const CreditCard = (props) => {
  useEffect(() => {}, []);

  return (
    <>
      <div className='col-md-12' style={{ paddingTop: '20px' }}>
        <Link to='/home' className='Normal-1'>
          Volver
        </Link>
        <div className='row'>
          <div className='Title-1'>
            Tarjetas de credito
          </div>
        </div>
        <div className='row button-end'>
          <div className='l-button p-buttonenable'>Agregar</div>
        </div>
        <table className='card datatable col-sm-12'>
          <tr>
            <th>Tipo</th>
            <th>Numero</th>
            <th>Opciones</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Jill</td>
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

export default connect(mapStateToProps, mapDispatchToprops)(CreditCard);

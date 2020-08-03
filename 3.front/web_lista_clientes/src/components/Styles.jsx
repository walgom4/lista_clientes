import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FaTimes, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import Header from './Header';
import ErrorBoundary from '../generics/ErrorBoundary';

const Styles = (props) => {
  useEffect(() => {}, []);

  return (
    <>
      <h3>Top bar</h3>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <h3>Grids</h3>
      <div className='row'>
        <div className='col-md-12'>md12</div>
        <div className='col-md-6'>md6</div>
        <div className='col-md-6'>md6</div>
        <div className='col-md-6'>md6</div>
        <div className='col-md-3'>md3</div>
        <div className='col-md-3'>md3</div>
        <div className='col-md-1'>md1</div>
        <div className='col-md-1'>md1</div>
        <div className='col-md-1'>md1</div>
        <div className='col-md-1'>md1</div>
        <div className='col-md-1'>md1</div>
        <div className='col-md-1'>md1</div>
        <div className='col-md-1'>md1</div>
        <div className='col-md-1'>md1</div>
        <div className='col-md-1'>md1</div>
        <div className='col-md-1'>md1</div>
        <div className='col-md-1'>md1</div>
        <div className='col-md-1'>md1</div>
      </div>
      <h3>Notifications</h3>
      <div className='row'>
        <div className='status-notification nt-warning'>
          <span>warning</span>
        </div>
        <div className='status-notification nt-information'>
          <span>information</span>
        </div>
        <div className='status-notification nt-success'>
          <span>success</span>
        </div>
        <div className='status-notification nt-danger'>
          <span>danger</span>
        </div>
      </div>
      <h3>Tags</h3>
      <div className='row'>
        <div className='status-notification nt-tag'>
          <span>Tag name</span>
        </div>
        <div className='status-notification nt-tag'>
          <span>
            Tag name <FaTimes />
          </span>
        </div>
      </div>
      <h3>Text highlights</h3>
      <div className='card col-md-6'>
        <p className='Normal-1'>
          Lorem <span className='highlight-success'>ipsum dolor sit amet</span>, consectetur
          adipiscing elit{' '}
        </p>
        <p className='Normal-1'>
          Lorem <span className='highlight-warning'>ipsum dolor sit amet</span>, consectetur
          adipiscing elit{' '}
        </p>
        <p className='Normal-1'>
          Lorem <span className='highlight-danger'>ipsum dolor sit amet</span>, consectetur
          adipiscing elit{' '}
        </p>
      </div>

      <h3>Buttons</h3>
      <h4>Large</h4>
      <div className='row'>
        <div className='l-button p-buttonenable'>Default</div>
        <div className='l-button p-buttondisable'>Default</div>
        <div className='l-button s-buttonenable'>Default</div>
        <div className='l-button s-buttondisable'>Default</div>
        <div className='l-button i-buttonenable'>
          <FaRegBookmark />
          Default
        </div>
        <div className='l-button i-buttondisable'>
          <FaRegBookmark />
          Default
        </div>
      </div>
      <h4>Small</h4>
      <div className='row'>
        <div className='s-button p-buttonenable'>Default</div>
        <div className='s-button p-buttondisable'>Default</div>
        <div className='s-button s-buttonenable'>Default</div>
        <div className='s-button s-buttondisable'>Default</div>
        <div className='s-button i-buttonenable'>
          <FaRegBookmark />
          Default
        </div>
        <div className='s-button i-buttondisable'>
          <FaRegBookmark />
          Default
        </div>
      </div>
      <h4>Circular</h4>
      <div className='row'>
        <div className='c-button p-buttonenable'>D</div>
        <div className='c-button p-buttondisable'>D</div>
        <div className='c-button s-buttonenable'>D</div>
        <div className='c-button s-buttondisable'>D</div>
        <div className='c-button i-buttonenable'>
          <FaRegBookmark />
        </div>
        <div className='c-button i-buttondisable'>
          <FaRegBookmark />
        </div>
      </div>
      <h3>Inputs</h3>
      <div className='row'>
        <input className='input-default' type='text' placeholder='Buscar solicitudes pendientes' />
        <input className='input-default' type='text' placeholder='Buscar solicitudes pendientes' />
        <input
          className='input-default input-danger'
          type='text'
          placeholder='Buscar solicitudes pendientes'
        />
        <input
          className='input-default'
          type='text'
          placeholder='Buscar solicitudes pendientes'
          disabled
        />
        <select id='country' name='country' className='select-default'>
          <option value='au'>Australia</option>
          <option value='ca'>Canada</option>
          <option value='usa'>USA</option>
        </select>
        <select id='country' name='country' className='select-default select-danger'>
          <option>Seleccione una opción</option>
          <option value='au'>Australia</option>
          <option value='ca'>Canada</option>
          <option value='usa'>USA</option>
        </select>
        <select id='country' name='country' className='select-default' disabled>
          <option value='au'>Australia</option>
          <option value='ca'>Canada</option>
          <option value='usa'>USA</option>
        </select>
      </div>
      <h3>Forms</h3>
      <h4>form</h4>
      <div className='card col-md-6'>
        <div className='Title-1 form-group'>Registro</div>
        <div className='row'>
          <div className='col-md-12 form-group'>
            <label htmlFor='exampleEmail' className='Normal-1'>
              Email
            </label>
            <input
              id='exampleEmail'
              className='input-default col-md-12'
              type='text'
              placeholder='Email'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 form-group'>
            <label htmlFor='exampleEmail' className='Normal-1'>
              Email
            </label>
            <input
              id='exampleEmail'
              className='input-default col-md-12'
              type='text'
              placeholder='Email'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 form-group'>
            <label htmlFor='exampleEmail' className='Normal-1'>
              Email
            </label>
            <input
              id='exampleEmail'
              className='input-default col-md-12'
              type='text'
              placeholder='Email'
            />
          </div>
        </div>
        <div className='row button-end'>
          <div className='l-button p-buttonenable'>Enviar</div>
        </div>
      </div>
      <h4>Login</h4>
      <div className='card col-md-6'>
        <div className='Title-1 form-group'>Login</div>
        <div className='row'>
          <div className='col-md-12 form-group'>
            <label htmlFor='exampleEmail' className='Normal-1'>
              Usuario
            </label>
            <input
              id='exampleEmail'
              className='input-default col-md-12'
              type='text'
              placeholder='Email'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 form-group'>
            <label htmlFor='exampleEmail' className='Normal-1'>
              Password
            </label>
            <input
              id='exampleEmail'
              className='input-default col-md-12'
              type='text'
              placeholder='Email'
            />
          </div>
        </div>
        <div className='row button-end'>
          <div className='l-button p-buttonenable'>Enviar</div>
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

export default connect(mapStateToProps, mapDispatchToprops)(Styles);

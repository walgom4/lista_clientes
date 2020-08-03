/* eslint-disable import/prefer-default-export */
import history from '../utils/history';
import {
  setToken,
  setClients,
  setCurrentClient,
  setCurrentUser,
  setCurrentCreditCard,
  setCreditCards,
} from './index';
import {
  getCardType,
  getClients,
  getCreditCards,
  getCreditCardsByClient,
  getUsers,
  login,
  retrieveClient,
  retrieveCreditCards,
  createUser,
  updateClient,
  createClient,
  createCreditCard,
  updateCreditCard,
} from './request';
// handling data
function redirectLogin(data) {
  if (data.detail && data.detail === 'Invalid token header. No credentials provided.') {
    return true;
  }
  return false;
}
export const requestSignup = (payload, callback) => {
  return (dispatch) => {
    createUser(payload).then((data) => {
      callback(data);
    });
  };
};

export const requestLogin = (payload, callback) => {
  return (dispatch) => {
    login(payload).then((data) => {
      console.log(data);
      if (data.key != null) {
        dispatch(setToken(data.key));
      }
      if (redirectLogin(data)) {
        history.push('/');
      } else {
        callback(data);
      }
    });
  };
};

export const requestUser = (token, callback) => {
  return (dispatch) => {
    getUsers(token).then((data) => {
      console.log(data);
      if (Array.isArray(data)) {
        dispatch(setCurrentUser(data[0]));
      }
      if (redirectLogin(data)) {
        history.push('/');
      } else {
        callback(data);
      }
    });
  };
};

export const requestClient = (token, callback) => {
  return (dispatch) => {
    getClients(token).then((data) => {
      console.log(data);
      if (Array.isArray(data)) {
        dispatch(setClients(data));
      }
      if (redirectLogin(data)) {
        history.push('/');
      } else {
        callback(data);
      }
    });
  };
};

export const requestRetrieveClient = (token, id, callback) => {
  return (dispatch) => {
    retrieveClient(token, id).then((data) => {
      console.log(data);
      if (data.identification) {
        dispatch(setCurrentClient(data));
      }
      if (redirectLogin(data)) {
        history.push('/');
      } else {
        callback(data);
      }
    });
  };
};

export const requestUpdateClient = (payload, token, id, callback) => {
  return (dispatch) => {
    updateClient(payload, token, id).then((data) => {
      console.log(data);
      if (data.identification) {
        dispatch(setCurrentClient(data));
      }
      if (redirectLogin(data)) {
        history.push('/');
      } else {
        callback(data);
      }
    });
  };
};

export const requestCreateClient = (payload, token, iduser, callback) => {
  return (dispatch) => {
    const body = payload;
    body.fk_user = iduser;
    createClient(body, token).then((data) => {
      console.log(data);
      if (data.identification) {
        dispatch(setCurrentClient(data));
      }
      if (redirectLogin(data)) {
        history.push('/');
      } else {
        callback(data);
      }
    });
  };
};

export const requestCreditCardByClient = (token, idClient, callback) => {
  return (dispatch) => {
    getCreditCardsByClient(token, idClient).then((data) => {
      console.log(data);
      if (Array.isArray(data)) {
        dispatch(setCreditCards(data));
      }
      if (redirectLogin(data)) {
        history.push('/');
      } else {
        callback(data);
      }
    });
  };
};

export const requestRetrieveCreditCard = (token, id, callback) => {
  return (dispatch) => {
    retrieveCreditCards(token, id).then((data) => {
      console.log(data);
      if (data.id) {
        dispatch(setCurrentCreditCard(data));
      }
      if (redirectLogin(data)) {
        history.push('/');
      } else {
        callback(data);
      }
    });
  };
};

export const requestUpdateCreditCard = (payload, token, id, callback) => {
  return (dispatch) => {
    updateCreditCard(payload, token, id).then((data) => {
      console.log(data);
      if (data.id) {
        dispatch(setCurrentCreditCard(data));
      }
      if (redirectLogin(data)) {
        history.push('/');
      } else {
        callback(data);
      }
    });
  };
};

export const requestCreateCreditCard = (payload, token, idClient, callback) => {
  return (dispatch) => {
    const body = payload;
    body.fk_client = idClient;
    createCreditCard(body, token).then((data) => {
      console.log(data);
      if (data.id) {
        dispatch(setCurrentCreditCard(data));
      }
      if (redirectLogin(data)) {
        history.push('/');
      } else {
        callback(data);
      }
    });
  };
};

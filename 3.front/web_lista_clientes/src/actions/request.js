import '@babel/polyfill';
import { LOGIN, GET_CARD_TYPE, GET_CLIENT, GET_CREDIT_CARD, GET_USER } from '../utils/constants';

//here goes http requests

export const login = async (body) => {
  const url = LOGIN;
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const createUser = async (payload) => {
  const url = GET_USER;
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const getUsers = async (token) => {
  const url = GET_USER;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const createClient = async (payload, token) => {
  const url = `${GET_CLIENT}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const updateClient = async (payload, token, id) => {
  const url = `${GET_CLIENT}${id}/`;
  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const getClients = async (token) => {
  const url = GET_CLIENT;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const retrieveClient = async (token, id) => {
  const url = `${GET_CLIENT}${id}/`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const getCardType = async (token) => {
  const url = GET_CARD_TYPE;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};
export const getCreditCards = async (token) => {
  const url = GET_CREDIT_CARD;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};
export const getCreditCardsByClient = async (token, idClient) => {
  const url = `${GET_CREDIT_CARD}?fk_client=${idClient}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const retrieveCreditCards = async (token, id) => {
  const url = `${GET_CREDIT_CARD}${id}/`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const updateCreditCard = async (payload, token, id) => {
  const url = `${GET_CREDIT_CARD}${id}/`;
  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const createCreditCard = async (payload, token) => {
  const url = `${GET_CREDIT_CARD}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

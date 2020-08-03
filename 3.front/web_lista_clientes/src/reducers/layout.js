import { initialState } from './initialState';

export default function layout(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGIN_MESSAGE':
      return {
        ...state,
        loginMessage: action.payload,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'SET_CLIENTS':
      return {
        ...state,
        clients: action.payload,
      };
    case 'SET_CURRENT_CLIENT':
      return {
        ...state,
        currentClient: action.payload,
      };
    case 'SET_CREDIT_CARDS':
      return {
        ...state,
        creditCards: action.payload,
      };
    case 'SET_CURRENT_CREDIT_CARD':
      return {
        ...state,
        currentCreditCard: action.payload,
      };

    default:
      return state;
  }
}

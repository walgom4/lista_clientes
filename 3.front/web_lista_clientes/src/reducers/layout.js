import { layoutStore } from './initialState';
import { routes } from '../utils/constants';

export default function layout(state = layoutStore, action) {
  switch (action.type) {
    case 'SET_ERROR_MODAL':
      return {
        ...state,
        errorModal: action.payload,
      };
    case 'SET_VISIBLE_MODAL':
      return {
        ...state,
        visibleModal: action.payload,
      };
    default:
      return state;
  }
}

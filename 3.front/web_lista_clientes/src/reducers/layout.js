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
    case 'SET_BREAD_CRUMB_AND_REPORT': {
      const itemToAdd = routes.filter((item) => item.link === action.payload.pathname)[0];
      const newList = state.breadCrumbs.filter((item) => item.order < itemToAdd.order);
      for (let index = 0; index < newList.length; index++) {
        newList[index].last = false;
      }

      return {
        ...state,
        breadCrumbs: [...newList, { ...itemToAdd, last: true }],
      };
    }
    default:
      return state;
  }
}

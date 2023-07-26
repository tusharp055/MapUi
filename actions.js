// actions.js
import { ActionTypes } from './actionTypes';

export const selectRegion = (region) => {
  return {
    type: ActionTypes.SELECT_REGION,
    payload: region,
  };
};

export const toggleNightMode = () => {
  return {
    type: ActionTypes.TOGGLE_NIGHT_MODE,
  };
};


import { ActionTypes } from './actionTypes';

const initialState = {
  nightMode: false,
};

const nightModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_NIGHT_MODE:
      return {
        ...state,
        nightMode: !state.nightMode,
      };
    default:
      return state;
  }
};

export default nightModeReducer;

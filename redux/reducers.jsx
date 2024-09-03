import { SET_USER, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR } from "./actionTypes";

const initialState = {
  user: null,
  events: [],
  isLoading: true,
  error: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isLoading: false,
      };
    case FETCH_EVENTS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
  
    default:
      return state;
  }
};

export default appReducer;

import { SAVE_DATA } from "../Saga/index";

const initialState = {
data : null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA: {
      return {
        ...state,
        data: action.data,

      };
    }
    default:
      return state;
  }
};

export default reducer;

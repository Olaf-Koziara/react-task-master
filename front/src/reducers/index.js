import { actionTypes } from "../actions/actionTypes";

const initialState = { booksArray: [] };
export const reactTaskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.setBooks: {
      return {
        ...state,
        booksArray: payload,
      };
    }
    default:
      return state;
  }
};

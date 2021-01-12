import { actionTypes } from "./actionTypes";

export const setBooksAction = (data) => ({
  type: actionTypes.setBooks,
  payload: data,
});

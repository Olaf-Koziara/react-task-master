import { actionTypes } from "./actionTypes";

export const setBooksAction = (data) => ({
  type: actionTypes.setBooks,
  payload: data,
});
export const addItemToCartAction = (item) => ({
  type: actionTypes.addItemToCart,
  payload: item,
});

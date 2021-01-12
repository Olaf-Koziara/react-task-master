import { actionTypes } from "./actionTypes";

export const setBooksAction = (data) => ({
  type: actionTypes.setBooks,
  payload: data,
});
export const addItemToCartAction = (item) => ({
  type: actionTypes.addItemToCart,
  payload: item,
});
export const deleteItemFromCartAction = (itemData) => ({
  type: actionTypes.deleteItemFromCart,
  payload: itemData,
});
export const increaseCartItemQuantityAction = (id) => ({
  type: actionTypes.increaseCartItemQuantity,
  payload: id,
});
export const decreaseCartItemQuantityAction = (id) => ({
  type: actionTypes.decreaseCartItemQuantity,
  payload: id,
});

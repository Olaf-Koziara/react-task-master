import { actionTypes } from "../actions/actionTypes";

const initialState = {
  booksArray: [],
  cartItems: [],
  cartCounter: 0,
  selectedPage: 1,
};
export const reactTaskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.setBooks: {
      return {
        ...state,
        booksArray: payload,
      };
    }
    case actionTypes.addItemToCart: {
      let cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem) {
        cartItem.productQuantity = cartItem.productQuantity + 1;
        return {
          ...state,
          cartItems: [
            ...state.cartItems.filter((item) => item.id !== payload.id),
            cartItem,
          ],
          cartCounter: state.cartCounter + 1,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...payload, productQuantity: 1 }],
          cartCounter: state.cartCounter + 1,
        };
      }
    }
    case actionTypes.deleteItemFromCart: {
      const { id, productQuantity } = payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== id),
        cartCounter: state.cartCounter - productQuantity,
      };
    }
    default:
      return state;
  }
};

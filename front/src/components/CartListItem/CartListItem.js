import React from "react";
import {
  StyledCartListItem,
  StyledCartListItemImage,
} from "../../styled_components";
import deleteIcon from "../../assets/deletIcon.png";
import {
  decreaseCartItemQuantityAction,
  deleteItemFromCartAction,
  increaseCartItemQuantityAction,
} from "../../actions";
import { connect } from "react-redux";
const CartListItem = ({
  cartItem,
  deleteItemFromCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
}) => {
  const { id, title, cover_url, price, currency, productQuantity } = cartItem;
  const handleDecreaseCartItemQuantity = () => {
    if (productQuantity > 1) {
      decreaseCartItemQuantity(id);
    } else {
      deleteItemFromCart({ id: id, productQuantity: productQuantity });
    }
  };
  return (
    <StyledCartListItem>
      <StyledCartListItemImage src={cover_url} />
      <div className="text-y-center">{title}</div>
      <div className="text-y-center">{`${price} ${currency}`}</div>
      <button onClick={handleDecreaseCartItemQuantity}>-</button>
      <h2 className="text-y-center">{productQuantity}</h2>
      <button onClick={() => increaseCartItemQuantity(id)}>+</button>
      <button
        onClick={() =>
          deleteItemFromCart({ id: id, productQuantity: productQuantity })
        }
      >
        <StyledCartListItemImage size="medium" src={deleteIcon} />
      </button>
    </StyledCartListItem>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteItemFromCart: (itemData) =>
    dispatch(deleteItemFromCartAction(itemData)),
  increaseCartItemQuantity: (id) =>
    dispatch(increaseCartItemQuantityAction(id)),
  decreaseCartItemQuantity: (id) =>
    dispatch(decreaseCartItemQuantityAction(id)),
});
export default connect(null, mapDispatchToProps)(CartListItem);

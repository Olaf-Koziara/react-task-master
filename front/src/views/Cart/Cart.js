import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartListItem from "../../components/CartListItem/CartListItem";
import {
  StyledCartList,
  StyledButton,
  StyledCartWrapper,
} from "../../styled_components";

const Cart = ({ cartCounter, cartItems }) => {
  return (
    <StyledCartWrapper>
      <StyledCartList>
        {cartItems.length > 0 ? (
          <>
            {" "}
            {cartItems.map((item) => (
              <CartListItem cartItem={item} />
            ))}
          </>
        ) : (
          <div>Brak przedmiotów w koszyku</div>
        )}
      </StyledCartList>
      {cartItems.length > 0 ? (
        <Link to="/order">
          <StyledButton>Przejdz dalej</StyledButton>
        </Link>
      ) : null}
    </StyledCartWrapper>
  );
};
const mapStateToProps = (state) => ({
  cartCounter: state.cartCounter,
  cartItems: state.cartItems,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

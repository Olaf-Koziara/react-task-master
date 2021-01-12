import React from "react";
import {
  StyledLogo,
  StyledCartIcon,
  StyledNavList,
  StyledCartIconWrapper,
} from "../../styled_components";
import bookLogo from "../../assets/bookLogo.png";
import cartIcon from "../../assets/cartIcon.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = ({ cartCounter }) => {
  return (
    <StyledNavList>
      <li>
        <Link to="/">
          <StyledLogo src={bookLogo} />
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <StyledCartIconWrapper cartCounter={cartCounter}>
            <StyledCartIcon src={cartIcon} />
          </StyledCartIconWrapper>
        </Link>
      </li>
    </StyledNavList>
  );
};
const mapStateToProps = (state) => ({
  cartCounter: state.cartCounter,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

import React from "react";
import { useDispatch } from "react-redux";
import {
  StyledBookListItem,
  StyledButton,
  StyledProductImage,
  StyledProductTextContainer,
} from "../../styled_components";
import { addItemToCartAction } from "../../actions";
const BookListItem = ({ bookData }) => {
  const { title, author, cover_url, pages, price, currency } = bookData;
  const dispatch = useDispatch();
  const addItemToCart = (item) => dispatch(addItemToCartAction(item));
  return (
    <StyledBookListItem>
      <div className="d-flex">
        <StyledProductImage src={cover_url} />
        <StyledProductTextContainer>
          <h2 className="my-10">{title}</h2>
          <h3>{author}</h3>
          <h4 className="my-5">cena: {`${price} ${currency}`}</h4>
          <h5 className="my-5">strony: {pages}</h5>
        </StyledProductTextContainer>
      </div>
      <div className="text-center  my-10">
        <StyledButton onClick={() => addItemToCart({ ...bookData })}>
          Dodaj do koszyka
        </StyledButton>
      </div>
    </StyledBookListItem>
  );
};

export default BookListItem;

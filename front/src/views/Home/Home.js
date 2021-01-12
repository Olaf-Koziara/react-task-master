import React from "react";
import { connect } from "react-redux";
import BookListItem from "../../components/BookListItem/BookListItem";
import { StyledBookList } from "../../styled_components";

const Home = ({ books }) => {
  return (
    <div>
      {books ? (
        <StyledBookList>
          {books.map((book) => (
            <BookListItem key={book.id} bookData={book} />
          ))}
        </StyledBookList>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => ({
  books: state.booksArray.data,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

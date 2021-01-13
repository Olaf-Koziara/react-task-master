import React from "react";
import { connect } from "react-redux";
import BookListItem from "../../components/BookListItem/BookListItem";
import { StyledBookList } from "../../styled_components";

const Home = ({ books }) => {
  return (
    <>
      <div>
        {books ? (
          <StyledBookList>
            {books.map((book) => (
              <BookListItem key={book.id} bookData={book} />
            ))}
          </StyledBookList>
        ) : (
          <div className="text-center">Brak danych</div>
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  books: state.booksArray.data,
  apiData: state.booksArray.metadata,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

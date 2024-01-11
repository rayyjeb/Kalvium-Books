import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
function SearchBooks() {
  // creating ref for results
  const resultsRef = useRef();
  // state for books
  const [books, setBooks] = useState([]);
  // state for search
  const [search, setSearch] = useState("");
  // running on component mount
  useEffect(() => {
    async function getBooks() {
      try {
        // fetching data from api
        const response = await fetch(
          "https://reactnd-books-api.udacity.com/books",
          {
            headers: { Authorization: "whatever-you-want" },
          }
        );
        const data = await response.json();
        console.log("data: ", data);
        setBooks(data.books);
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  }, []);
  // filtering books based on search
  const filteredBooks = books.filter((book) => {
    if (search === "") {
      return true;
    }
    const title = book.title.toLowerCase();
    return title.includes(search.toLocaleLowerCase());
  });
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
  };
  return (
    <div>
      <article
        className="SearchResultsSection"
        id="booksSection"
        ref={resultsRef}
      >
        {/* search results section */}
        <div className="searchResultsHeader">
          <p className="topText">New Arrivals</p>
          <h1 className="subTopText">Trending Books</h1>
        </div>
        <div className="searchDiv">
          {/* search bar */}
          <input
            className="SearchInput"
            type="text"
            placeholder="Search Books..."
            onKeyPress={handleSearch}
            style={{ color: "white", background: "rgba(255, 255, 255, 0.17)" }}
          ></input>
        </div>
        {/*  books div*/}
        <div className="mainCardDiv">
          <div className="parentCardDiv">
            {filteredBooks.map((book) => (
              <AnimationOnScroll animateIn="animate__fadeIn">
                <div className="individualCard" key={book.id}>
                  <div className="imageDiv">
                    <img
                      className="BookImage"
                      src={book.imageLinks.thumbnail}
                    ></img>
                  </div>
                  <div className="Credentials">
                    <h2 className="bookTitle"> {book.title} </h2>
                    <div className="innerCredentials">
                      <p className="authorName">{book.authors.join(", ")}</p>
                      <p className="free">Free</p>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
            ))}
          </div>
        </div>
      </article>
      {/* footer */}
      <footer>
        <div className="footerFlex">
          <img className="footerLogo" src="/src/assets/Group 3.png"></img>
        </div>
      </footer>
    </div>
  );
}

export default SearchBooks;

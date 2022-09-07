import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";

function Main() {
  const { isAuthenticated } = useAuth0(); // need this component to chekc if user is authenticated

  const [allBooks, setBooks] = useState([]); // our state for book

  // function to get all books
  const toggleBooks = async () => {
    let URL = `${process.env.REACT_APP_SERVER}/books`;

    let response = await axios.get(URL);

    setBooks(response.data);

    console.log(allBooks);
  };
  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1>Books are avilable</h1>
          <button onClick={toggleBooks}>Get Books</button>

          {allBooks && allBooks.map((book) => {
            return(
                <>
                <h1>{book.title}</h1>
                </>
            )
          })}
          <Logout />
        </>
      ) : (
        <>
          <h1>Please Login </h1>
          <Login />
        </>
      )}
    </div>
  );
}

export default Main;

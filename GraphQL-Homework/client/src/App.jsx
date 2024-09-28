import { gql, useMutation, useQuery } from "@apollo/client";
import Modal from "@mui/material/Modal";

import "./App.css";
import { Box, TextField } from "@mui/material";
import { useState } from "react";

const GET_BOOKS = gql`
  {
    books {
      id
      title
      price
      author {
        name
      }
    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $price: Float!, $author: String!) {
    addBook(title: $title, price: $price, author: $author) {
      id
      title
      price
      author {
        name
      }
    }
  }
`;

const DELETE_BOOK = gql`
  mutation DeleteBook($id: Int!) {
    deleteBook(id: $id) {
      id
      title
    }
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 5,
  py: 5,
  px: 5,
};

function App() {
  const [open, setOpen] = useState(false);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const { data, loading, refetch } = useQuery(GET_BOOKS);
  const [addBook] = useMutation(ADD_BOOK, {
    onCompleted: () => refetch(),
  });
  const [deleteBook] = useMutation(DELETE_BOOK, {
    onCompleted: () => refetch(),
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author || price <= 0) {
      alert("Please provide valid details for the book");
      return;
    }

    await addBook({
      variables: {
        title,
        price,
        author,
      },
    }).then(() => {
      handleClose();
      setTitle("");
      setPrice(0);
      setAuthor("");
      console.log(data, "add book");
    });
  };

  const handleDelete = (id) => {
    deleteBook({
      variables: { id },
    })
      .then((response) => {
        console.log(response.data.deleteBook, "Deleted book data");
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
        alert("Failed to delete book. Please try again.");
      });
  };

  console.log(data, "data");

  return (
    <>
      <button onClick={handleOpen}>Add Author and Book</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              label="Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              fullWidth
            />
            <TextField
              margin="normal"
              label="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
            <TextField
              margin="normal"
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(+e.target.value)}
              fullWidth
            />
            <button type="submit">Add</button>
          </form>
        </Box>
      </Modal>

      {loading && <p>Loading...</p>}
      {data &&
        data.books.map((book) => (
          <div
            style={{ border: "1px solid black", margin: "10px" }}
            key={book.id}
          >
            <p>
              {book.title} <strong>{book.price} USD</strong>
            </p>
            <small>By {book.author.name}</small>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </div>
        ))}
    </>
  );
}

export default App;

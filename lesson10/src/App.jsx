import { useReducer, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const tasksReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
      case "delete":
        return state.filter((item) => item.title !== action.payload);
      default:
        return state;
    }
  };

  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const toggleModal = () => {
    setModalIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="wrapper">
        <Header toggleModal={toggleModal} />
        <main className="main"></main>
        {modalIsOpen && <AddTask />}
      </div>
    </>
  );
}

export default App;

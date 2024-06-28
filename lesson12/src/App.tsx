import { useEffect, useReducer } from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { reducer } from "./lib/reducer";
import { initialState } from "./lib/initialState";
import { ToDoContext } from "./lib/context";
import { getAllToDos } from "./lib/api";
import { ActionTypes } from "./lib/types";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getAllToDos().then((response) => {
      dispatch({ type: ActionTypes.put, payload: response });
    });
  }, []);

  return (
    <>
      <ToDoContext.Provider value={{ state, dispatch }}>
        <ToDoList />
      </ToDoContext.Provider>
    </>
  );
}

export default App;

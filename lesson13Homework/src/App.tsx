import { useEffect, useReducer } from "react";
import "./App.css";
import { EventList } from "./components/EventList";
import { Filter } from "./components/Filter";
import { reducer } from "./lib/reducer";
import { initialState } from "./lib/initialState";
import { EventContext } from "./lib/Context";
import { getAllEvents } from "./lib/api";
import { ActionTypes } from "./lib/types";
import { AddEvent } from "./components/AddEvent";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getAllEvents(state.currentFilter).then((result) => {
      dispatch({ type: ActionTypes.setEvents, payload: result });
    });
  }, [state.currentFilter]);



  
  return (
    <>
      <EventContext.Provider value={{ state, dispatch }}>
        <Filter />
        <AddEvent />
        <EventList />
      </EventContext.Provider>
    </>
  );
}

export default App;

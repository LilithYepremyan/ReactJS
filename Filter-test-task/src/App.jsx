import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Main from "./components/Main/Main";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;

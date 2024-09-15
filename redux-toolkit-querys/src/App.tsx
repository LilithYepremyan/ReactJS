import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import { Users } from "./features/users/users"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <Users />
    </div>
  )
}

export default App

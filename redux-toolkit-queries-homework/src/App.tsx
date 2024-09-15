import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import { Users } from "./features/users/users"
import EditUser from "./features/editUser/editUser"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:id/edit" element={<EditUser />} />
      </Routes>
    </Router>
  )
}

export default App

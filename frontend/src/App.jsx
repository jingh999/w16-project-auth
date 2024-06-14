import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Mainpage } from "./components/Mainpage";
import { Userpage } from "./components/Userpage";
import { Register } from "./components/Register";
import { Login } from "./components/Login";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/userpage" element={<Userpage/>} />
      </Routes>
    </Router>
  )
}

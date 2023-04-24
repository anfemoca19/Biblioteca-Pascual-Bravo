import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import LoadRecord from "./pages/LoadRecord/loadRecord";
import RegisterBook from "./pages/RegisterBooks/registerBooks";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/registerBooks" element={<RegisterBook />} />
        <Route path="/loadRecord" element={<LoadRecord />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

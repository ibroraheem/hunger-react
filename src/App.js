import HomePage from "../src/components/home/HomePage";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />

     </Routes>

    </BrowserRouter>
  );
}

export default App;

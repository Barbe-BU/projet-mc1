import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import State from "./pages/State";
import Form from "./pages/Form";
import P404 from "./pages/P404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state" element={<State />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<P404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

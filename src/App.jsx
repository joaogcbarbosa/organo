import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Organo from "./pages/Organo";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Organo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

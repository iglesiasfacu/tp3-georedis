import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import List from "./pages/List/List";
import Config from "./pages/Config/Config";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/list" element={<List />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

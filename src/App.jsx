import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage/Homepage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DetailNewsPage from "./pages/DetailNewsPage/DetailNewsPage";

function App() {
  return (
      <>
        <div className="app">
          <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/category/:category/:topic?" element={<CategoryPage />} />
              <Route path="/news/:idNews" element={<DetailNewsPage />} />
            </Routes>
          </Router>
        </div>
      </>
  );
}

export default App;

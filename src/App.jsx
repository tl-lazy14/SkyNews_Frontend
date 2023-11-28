import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage/Homepage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DetailNewsPage from "./pages/DetailNewsPage/DetailNewsPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import NewestPage from "./pages/NewestPage/NewestPage";
import MostViewedPage from "./pages/MostViewedPage/MostViewedPage";
import HotNewsPage from "./pages/HotNewsPage/HotNewsPage";

function App() {
  return (
      <>
        <div className="app">
          <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/category/:category/:topic?" element={<CategoryPage />} />
              <Route path="/news/:idNews" element={<DetailNewsPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/newest" element={<NewestPage />} />
              <Route path="/most-view" element={<MostViewedPage />} />
              <Route path="/hot-news" element={<HotNewsPage />} />
            </Routes>
          </Router>
        </div>
      </>
  );
}

export default App;

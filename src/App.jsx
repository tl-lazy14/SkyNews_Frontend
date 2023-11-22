import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
      <>
        <div className="app">
          <Router>
            <Routes>
              <Route path="/" element={<Homepage />} >
          
              </Route>
            </Routes>
          </Router>
        </div>
      </>
  );
}

export default App;

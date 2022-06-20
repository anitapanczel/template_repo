import "./App.css";
import { useCounter } from "./providers/counter.jsx";
import { useNavigate, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Callback from "./pages/Callback";
import Protected from "./components/Protected";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route
          path="/register"
          element={
            <Protected>
              <Register />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

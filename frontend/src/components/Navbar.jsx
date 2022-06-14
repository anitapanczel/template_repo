import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const nav = (path) => {
    console.log("rerouting..."); // elagazás, ciklusok, bármit meg lehet itt írni, hogy a végén legyen, hogy meghívódik a navigate a path-szal
    navigate(path);
  }
  return (
    <div>
      <nav>
        <button onClick={() => nav("/")}>Home</button>
        <button onClick={() => nav("/about")}>About</button>
        {/*<button onClick={() => navigate("/profile")}>Profile</button>*/}
        <Link to="/profile"> Profile </Link>
      </nav>
    </div>
  );
};

export default Navbar;

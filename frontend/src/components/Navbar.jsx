import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../providers/auth";

const Navbar = () => {
  const { auth, token, logout } = useAuth();
  const navigate = useNavigate();
  const nav = (path) => {
    //console.log("rerouting..."); // elagazás, ciklusok, bármit meg lehet itt írni, hogy a végén legyen, hogy meghívódik a navigate a path-szal
    navigate(path);
  };
  return (
    <nav
      style={{
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="left">
        <button onClick={() => nav("/")}>Home</button>
        <button onClick={() => nav("/about")}>About</button>
        {/*<button onClick={() => navigate("/profile")}>Profile</button>*/}
        <Link to="/profile"> Profile </Link>
      </div>
      <div className="right">
        {!token ? (
          <button onClick={auth}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

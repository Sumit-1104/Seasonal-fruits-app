import React from "react";
import "./Styles.css";
const Navbar = ({ filteritem, menulist }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="btn-group">
          {menulist.map((curelem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filteritem(curelem)}
              >
                {curelem}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
import React from "react";
import "./Header.css";
const Logout = () => {
  function handleLogout() {
    localStorage.removeItem("Signup");
    window.location.reload();
  }
  function handleSingin() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <div className="dropdown-profile">
        <ul className="dropdown-ul">
          <li
            style={{ fontSize: "16px", color: "white" }}
            onClick={handleLogout}
          >
            Logout
          </li>
          <li
            style={{
              fontSize: "16px",
              color: "white",
            }}
            onClick={handleSingin}
          >
            Delete
          </li>
        </ul>
      </div>
    </>
  );
};

export default Logout;

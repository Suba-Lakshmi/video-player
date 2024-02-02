import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { deleteUser, updateSignIn, updateSignup } from "./userSlice";
const Logout = () => {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(updateSignIn());
    dispatch(updateSignup());
  }

  function handleSignin() {
    dispatch(deleteUser());
    dispatch(updateSignup());
  }
  // function handleLogout() {
  //   localStorage.removeItem("Signup");
  //   window.location.reload();
  // }
  // function handleSignin() {
  //   localStorage.clear();
  //   window.location.reload();
  // }

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
            onClick={(e) => handleSignin(e)}
          >
            Delete
          </li>
        </ul>
      </div>
    </>
  );
};

export default Logout;

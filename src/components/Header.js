import React, { useState } from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "./Header.css";
import Logout from "./Logout";
// import Popup from "./Popup";
import UrlList from "./UrlList";
const Header = () => {
  const [profile, setProfile] = useState(false);
  // const [addurl, setAddUrl] = useState(false);

  return (
    <>
      <ul>
        <li>
          {" "}
          <MdOutlineOndemandVideo />
        </li>
        <li>VideoPlayer</li>
      </ul>
      <li>
        <UrlList />
      </li>
      <li className="profile" onClick={() => setProfile(!profile)}>
        <CgProfile />
      </li>

      <div>{profile && <Logout />}</div>

      {/* <button className="add" onClick={() => setAddUrl(!addurl)}>
        AddUrl
      </button>
      <div>{addurl && <Popup onClose={() => setAddUrl(false)} />}</div> */}
    </>
  );
};

export default Header;

import React, { useRef, useState } from "react";
import "./Header.css";
import Video from "./Video";

const PopupMsg = ({ onClose }) => {
  const [title, isTitle] = useState("");
  const [url, isUrl] = useState("");
  const [videos, setVideos] = useState([]);
  const popRef = useRef();

  function handleCheck() {
    if (title !== "" && url !== "") {
      const newVideo = { title, url };
      setVideos([...videos, newVideo]);
      isTitle("");
      isUrl(" ");
    }
  }
  function handleInput(e) {
    isTitle(e.target.value);
  }
  function handleUrl(e) {
    isUrl(e.target.value);
  }
  function handlePopup(e) {
    if (popRef.current.value === e.target.value) {
      onClose();
    }
  }
  return (
    <>
      <div ref={popRef} onClick={handlePopup}>
        <div className="popup-modal">
          <div className="popup">
            <label>Video Title:</label>
            <input
              className="popup-input"
              value={title}
              type="text"
              onChange={handleInput}
            />{" "}
            <br />
            <label>Embeded url:</label>
            <input
              className="popup-input"
              type="url"
              value={url}
              onChange={handleUrl}
            />
            <br />
            <button className="popup-button" onClick={handleCheck}>
              Add
            </button>
          </div>
        </div>
      </div>
      <div>
        <Video videos={videos} />
      </div>
    </>
  );
};

export default PopupMsg;

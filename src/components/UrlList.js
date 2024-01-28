import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "./Header.css";
import Video from "./Video";
// const getItems = () => {
//   let list = localStorage.getItem("videos");
//   if (list) {
//     return JSON.parse(localStorage.getItem("videos"));
//   }
// };
const UrlList = () => {
  const [title, isTitle] = useState("");
  const [url, isUrl] = useState("");
  const [videos, setVideos] = useState([]);

  function handleInput(e) {
    isTitle(e.target.value);
  }
  function handleUrl(e) {
    isUrl(e.target.value);
  }
  useEffect(() => {
    if (localStorage.getItem("videos")) {
      setVideos(JSON.parse(localStorage.getItem("videos")));
    }
  }, []);
  function handleCheck() {
    if (title !== "" && url !== "") {
      const newVideo = { title, url };

      setVideos([...videos, newVideo]);
      localStorage.setItem("videos", JSON.stringify([...videos, newVideo]));

      isTitle("");
      isUrl(" ");
    }
  }

  return (
    <div>
      <Popup
        className="popup-div"
        trigger={<button className="add">Add url</button>}
      >
        <div className="popup">
          <label>Video Title:</label>
          <input
            style={{ marginBottom: "20px" }}
            className="input-popup"
            value={title}
            type="text"
            onChange={handleInput}
          />
          <br />
          <label>Embeded url:</label>
          <input
            className="input-popup"
            type="url"
            value={url}
            onChange={handleUrl}
          />
          <br />

          <button
            className="add-popup-button"
            onClick={() => {
              handleCheck();
            }}
          >
            Add
          </button>
        </div>
      </Popup>
      <div>
        <Video videos={videos} />
      </div>
      {/* /*<div className="list">
        <ul>
          <li className="head">Videos</li>
          {videos.map((video) => (
            <li className="videoTitle" onClick={() => handleVideo(video)}>
              {video.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {currentVideo && (
          <div className="video">
            <h4>{currentVideo.title}</h4>
            <iframe
              title={currentVideo.title}
              width="660"
              height="315"
              src={currentVideo.url}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default UrlList;

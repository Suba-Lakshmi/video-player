import React, { useState } from "react";

const Video = ({ videos, url, title }) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  function handleVideo(video) {
    // localStorage.setItem("Title", title);
    // localStorage.setItem("Url", url);
    setCurrentVideo(video);
  }
  return (
    <div>
      <div className="list">
        <ul>
          {/* <li className="head">Videos</li> */}
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
      </div>
    </div>
  );
};

export default Video;

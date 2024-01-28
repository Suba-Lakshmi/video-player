import React, { useState } from "react";

const Video = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  function handleVideo(video) {
    setCurrentVideo(video);
  }

  return (
    <div>
      <div className="list">
        <ul style={{ display: "block" }}>
          {/* <li className="head">Videos</li> */}
          {videos.map((video, index) => (
            <li
              key={index}
              className="videoTitle"
              onClick={() => handleVideo(video)}
            >
              {video.url}
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

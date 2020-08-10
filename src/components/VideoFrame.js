import React from "react";

const VideoFrame = (props) => {
  return (
    <div className="col-8">
      <div className="card">
        <div className="embed-responsive embed-responsive-16by9 card-img-top">
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            title="video player"
            id="video"
            allowFullScreen
          ></iframe>
        </div>
        <div className="card-body">
          <p className="card-text">{props.videoDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoFrame;

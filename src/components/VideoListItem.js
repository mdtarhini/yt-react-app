import React from "react";
import "./VideoListItem.css";

const VideoListItem = (props) => {
  return (
    <div className="card mb-3" onClick={() => props.onItemSelected(props.videoId,props.videoDescription)}>
      <div className="row no-gutters">
        <div className="col-md-5 align-self-center">
          <img src={props.thumbnail} className="card-img" alt="..." />
        </div>
        <div className="col-md-7">
          <div className="card-body py-0">
            <p className="card-title">{props.title.slice(0, 30)}</p>

            <p className="card-text">
              <small className="text-muted">
                {props.channelTitle.slice(0, 15)}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoListItem;

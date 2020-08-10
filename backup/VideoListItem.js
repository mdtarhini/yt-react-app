import React from "react";
import "./VideoListItem.css";

class VideoListItem extends React.Component {
    onSelected = () => {
    console.log("A video is selected. I am calling from Item.js");
    this.props.onItemSelected('r');
  };
  render() {
    console.log(this.props);
    return (
      <div className="card mb-3" onClick={this.onSelected}>
        <div className="row no-gutters">
          <div className="col-md-5 align-self-center">
            <img src={this.props.thumbnail} className="card-img" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body py-0">
              <p className="card-title">{this.props.title.slice(0, 30)}</p>

              <p className="card-text">
                <small className="text-muted">
                  {this.props.channelTitle.slice(0, 15)}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoListItem;

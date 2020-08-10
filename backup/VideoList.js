import React from "react";
import VideoListItem from "./VideoListItem";

class VideoList extends React.Component {
  state = {
    selectedItem: null,
  };
  onItemSelected = ()=>{
    console.log("A video has been selected. I am calling from VideoList.js");
    this.props.onItemSelected('s');
  };
  render() {
    const VideoItems = this.props.items.map((item) => {
      return (
        <VideoListItem
          thumbnail={item.snippet.thumbnails.high.url}
          title={item.snippet.title}
          channelTitle={item.snippet.channelTitle}
          onItemSelected={this.onItemSelected}
        />
      );
    });
    return <div className="col-4 d-flex flex-column">{VideoItems}</div>;
  }
}
export default VideoList;

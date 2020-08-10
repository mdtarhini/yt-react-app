import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = (props) => {
    
  const VideoItems = props.items.map((item) => {
    console.log(item);
    return (
      <VideoListItem
        thumbnail={item.snippet.thumbnails.high.url}
        title={item.snippet.title}
        channelTitle={item.snippet.channelTitle}
        onItemSelected={props.onItemSelected}
        key={item.id.videoId}
        videoId={item.id.videoId}
        videoDescription={item.snippet.description}
      />
    );
  });
  return <div className="col-4 d-flex flex-column">{VideoItems}</div>;
};
export default VideoList;

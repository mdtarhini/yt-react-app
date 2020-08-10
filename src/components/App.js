// from "moduleName" if the module is in the node_modules
import React, { useState } from "react";
//otherwise
import SearchBar from "./SearchBar";
// import youtube from "../api/youtube";
import useVideos from "../hooks/useVideos";

import VideoList from "./VideoList";
import VideoFrame from "./VideoFrame";

const App = () => {
  //Video search and setting of videos object:
  //------------------------------------------------------------------------------//
  //with the custom hooks:
  const [videos, onSearchSubmit] = useVideos("messi");
  //------------------------------------------------------------------------------//

  /*
  //------------------------------------------------------------------------------//
  //without the custom hooks:
  const [videos, setVideos] = useState([]);
  const onSearchSubmit = async (term) => {
    const response = await youtube.get("/search/", {
      params: { q: term },
    });
    setVideos(response.data.items);
  };

  useEffect(() => {
    onSearchSubmit("messi");
  }, []);
  //------------------------------------------------------------------------------//
  */

  //------------------------------------------------------------------------------//
  //Item selection
  const [selectedVideoId, SetSelectedVideoId] = useState(null);
  const [selectedVideoDescription, SetSelectedVideoDescription] = useState("");

  const onItemSelected = (videoId, videoDescription) => {
    SetSelectedVideoId(videoId);
    SetSelectedVideoDescription(videoDescription);
  };
  //------------------------------------------------------------------------------//

  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <SearchBar onUserSubmit={onSearchSubmit} />
      <div className="row">
        {selectedVideoId && (
          <VideoFrame
            videoId={selectedVideoId}
            videoDescription={selectedVideoDescription}
          />
        )}
        <VideoList items={videos} onItemSelected={onItemSelected} />
      </div>
    </div>
  );
};

export default App;

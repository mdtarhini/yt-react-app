// from "moduleName" if the module is in the node_modules
import React from "react";
//otherwise
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videos: [],
  };
  onItemSelected = (url) => {
    console.log("A video has been selected. I am calling from App.js");
  };
  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search/", {
      params: { q: term },
    });
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "10px" }}>
        <SearchBar onUserSubmit={this.onSearchSubmit} />
        <div className="row">
          <VideoList
            items={this.state.videos}
            onItemSelected={this.onItemSelected}
          />
        </div>
      </div>
    );
  }
}

export default App;

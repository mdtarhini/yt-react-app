// from "moduleName" if the module is in the node_modules
import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    //Like that we don't reload the page every time we hit enter
    event.preventDefault();
    // console.log(this.state.term);
    props.onUserSubmit(term);
    // here a way to propagate something from a child to parent. To summarize, we sent from the parent a callback function that was invoked here.
  };

  return (
    <div className="conatiner">
      {/* By default in html, if you press enter when writing, the page will reload */}
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label forhtml="searchInput"> Youtube search </label>{" "}
          {/* We did not put parenthesis when calling onInputChange
                         because if so, it will be called whenver the component is rendered.  */}
          {/* Similar to onChange: onClick, onSubmit. onClick can be 
                        trigerred for almost ll html elements*/}
          <input
            id="searchInput"
            className="form-control"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

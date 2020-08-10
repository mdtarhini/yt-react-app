// from "moduleName" if the module is in the node_modules
import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  // convention for naming: start with 'on' or 'handle'
  /*
  onFormSubmit(event) {
    If we try to access 'this'; like e.g:
    console.log(this.state.term);
     it will not be an instance of the searchbar component. This is simply because the method 'onSubmitForm' was invoked by telling the form element to assign the function 'onFormSubmit' to the function to be called when the form is submitted. Assigning a function, assigns only the function. 
    There are many solutions to fix this problem: 
    1-one of them is to bind this function to this object in the constructor:
    this.onFormSubmit = this.onFormSubmit.bind(this);
    2-Replace the function with an arrow function since they are automaticall bound. 
    
    onFormSubmit = (event) =>{
        _______
    };

    3-similar to (2), passing directly an arrow function like we did with the input text
   }
    */

  onFormSubmit = (event) => {
    //Like that we don't reload the page every time we hit enter
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onUserSubmit(this.state.term);
    // here a way to propagate something from a child to parent. To summarize, we sent from the parent a callback function that was invoked here.
  };

  render() {
    return (
      <div className="conatiner">
        {/* By default in html, if you press enter when writing, the page will reload */}
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label forhtml="searchInput">Image search</label>
            {/* We did not put parenthesis when calling onInputChange
             because if so, it will be called whenver the component is rendered.  */}
            {/* Similar to onChange: onClick, onSubmit. onClick can be 
            trigerred for almost ll html elements*/}

            <input
              id="searchInput"
              className="form-control"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

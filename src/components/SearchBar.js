import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  handleFormSubmit = (event) => event.preventDefault();
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5">
          <div className="col-10">
            <input
              onChange={this.props.searchMovie}
              type="text"
              className="form-control"
              placeholder="Search a movie"
              // value={this.props.state.searchQuery}
            ></input>
          </div>
          <div className="col-2">
            <Link
              to="/add"
              type="button"
              className="btn btn-md btn-danger"
              style={{ float: "right" }}
            >
              Add Movie
            </Link>
          </div>
        </div>
      </form>
    );
  }
}
export default SearchBar;

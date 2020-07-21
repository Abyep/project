import React, { Component } from "react"
import "./search.css"

class Search extends Component {
  render() {
    return (
      <div>
        <input
          className="search"
          placeholder="Search"
          value={this.props.searchInput}
          onChange={this.props.handleSearch}
        />
      </div>
    )
  }
}

export default Search

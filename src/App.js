import React, { Component } from "react"
import { connect } from "react-redux"
import { getData } from "./Saga"
import Modal from "./Components/Modal"
import SearchBar from "./Components/SearchBar"

import "./App.css"
import "./Homepage.css"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      filteredData: [],
      searchInput: "",
      user: {},
    }
  }

  componentDidMount() {
    const params = {
      id: 1,
    }
    this.props.dispatch(getData(params))
    document.addEventListener("mousedown", this.captureClick, false)
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.captureClick, false)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== null) {
      return { data: nextProps.data, filteredData: nextProps.data.data }
    } else return null
  }

  handleCategory = (event) => {
    this.setState({
      category: event.target.value.toLowerCase(),
    })
  }

  handleSearch = (event) => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  handleBack = () => {
    const params = {
      id: 1,
    }
    this.props.dispatch(getData(params))
  }

  handleForward = () => {
    const params = {
      id: 2,
    }
    this.props.dispatch(getData(params))
  }

  showModal = (data) => {
    this.setState({
      showModal: true,
      user: data,
    })
  }

  captureClick = (e) => {
    if (this.node.contains(e.target)) {
      return
    }
    this.setState({
      showModal: false,
    })
  }

  render() {
    let filteredData = this.state.filteredData.slice()
    if (this.state.searchInput !== "") {
      filteredData = this.state.filteredData.filter((data) => {
        if (
          data.first_name
            .toLowerCase()
            .indexOf(this.state.searchInput.toLowerCase()) !== -1 ||
          data.last_name
            .toLowerCase()
            .indexOf(this.state.searchInput.toLowerCase()) !== -1
        ) {
          return true
        }
      })
    }

    return (
      <div className="homepage-main-div">
        <div className="homepage-header">
          <strong> Frontend Freelancers </strong>{" "}
        </div>
        <SearchBar
          searchInput={this.state.searchInput}
          handleSearch={this.handleSearch}
        />
        <div style={{overflowX:"auto"}}>
        <table>
          {this.state.data.length !== 0 &&
            filteredData.map((user, index) => (
              <tr
                style={{ cursor: "pointer" }}
                onClick={() => this.showModal(user)}
              >
                <td>
                  <img className="avatar" src={user.avatar} />
                </td>
                <td>
                  <div style={{ paddingLeft: "15%" }}>
                    {user.first_name + " " + user.last_name}
                  </div>
                </td>
                <td className="no-mobile">
                  <div style={{ paddingLeft: "15%" }}>{user.email}</div>
                </td>
              </tr>
            ))}
        </table>
        </div>
        {this.pagination()}
        <div ref={(node) => (this.node = node)}>
          <Modal user={this.state.user} showModal={this.state.showModal} />
        </div>
      </div>
    )
  }

  pagination = () => {
    return (
      <div align="right">
        <div className="homepage-pagination-div">
          <div className="homepage-pagination-cursors">
            {" "}
            <div
              style={{ cursor: "pointer", paddingLeft: "1%", marginRight:"15%" }}
              onClick={this.handleBack}
            >{`<`}</div>
            <div
              style={{ cursor: "pointer", paddingLeft: "1%" }}
              onClick={this.handleForward}
            >{`>`}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.reducer.data,
  }
}

export default connect(mapStateToProps)(App)

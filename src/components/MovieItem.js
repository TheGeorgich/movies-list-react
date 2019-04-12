// Core
import React, { Component } from "react"

export class MovieItem extends Component {

  state = {
    willWatch: false
  }

  toggleWillWatch = () => {
    const { willWatch } = this.state
    const { item } = this.props

    this.setState({
      willWatch: !willWatch
    })

    willWatch ? 
      this.props.removeMovieToWillWatch(item)
      : 
      this.props.addMovieToWillWatch(item)
  }

  render() {
    const { item } = this.props
    const { willWatch } = this.state

    return (
      <div className="card" style={{ width: "100%" }}>
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
            item.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {item.vote_average}</p>
            <button
              type="button"
              className={`btn ${
                willWatch ? "btn-success" : "btn-secondary"
              }`}
              onClick={this.toggleWillWatch}
            >
              Will Watch
            </button>
          </div>
        </div>
      </div>
    )
  }
}
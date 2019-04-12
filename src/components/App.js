// Core
import React, { Component } from 'react'

// Component
import { MovieItem } from './MovieItem'
import { MoviesWillWatch } from './MoviesWillWatch'

// Data
import { moviesData } from '../moviesData'

export class App extends Component {

  state = {
    movies: moviesData,
    moviesWillWatch: []
  }

  addMovieToWillWatch = movie => {
    const { moviesWillWatch } = this.state
    const updateMoviesWillWatch = [...moviesWillWatch, movie]

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }

  removeMovieToWillWatch = movie => {
    const { moviesWillWatch } = this.state
    const updateMoviesWillWatch = moviesWillWatch.filter(
      item => item.id !== movie.id
    )

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }

  render() {
    const { movies, moviesWillWatch } = this.state
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {movies.map(item => (
                <div className="col-6 mb-4" key={item.id}>
                  <MovieItem 
                    item={item} 
                    addMovieToWillWatch={this.addMovieToWillWatch}
                    removeMovieToWillWatch={this.removeMovieToWillWatch}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-3">
            <MoviesWillWatch moviesWillWatch={moviesWillWatch} />
          </div>
        </div>
      </div>
    )
  }
}
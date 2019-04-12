// Core
import React from 'react'

export const MoviesWillWatch = props => {
  const { moviesWillWatch } = props

  return (
    <div>
      <h4>Will Watch: {moviesWillWatch.length}</h4>
      <ul className="list-group">
        {moviesWillWatch.map(item => (
          <li className="list-group-item" key={item.id}>
            <div className="d-flex justify-content-between">
              <p>{item.title}</p>
              <p>{item.vote_average}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

import React from "react"

export default function SearchMovies() {
  
  return (
    <form className="form">
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input className="input" type="text"
       name="query" placeholder="i.e Lord Of The Ring" />
      <button className="button" type="submit"> 
        Search
      </button>
    </form>

  )
}
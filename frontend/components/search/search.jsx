import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const searchBar = props => {
  const [query, setQuery] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    props.fetchSearchProducts(query).then(() => {
      props.history.push("/search")
    })
  }
  
  return (
      <form className='searchbar' onSubmit={handleSubmit}>
        <input type='text'
          id='search-text'
          onChange={event => setQuery(event.target.value)}
          value={query}
          placeholder='Search for items or shops' />
        <button type="submit" className="searchbutton"><i className="fa fa-search"></i></button>
      </form>
  )
  
}

export default withRouter(searchBar);
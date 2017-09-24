import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import SearchBar from './SearchBar'
import Navigation from './NavLinks'
import PhotoContainer from './PhotoContainer'


// Main application component
function Application() {
  return (
  <BrowserRouter>
    <div>
      <SearchBar />
      <Navigation />
      <PhotoContainer />
    </div>
  </BrowserRouter>
  )
}

export default Application

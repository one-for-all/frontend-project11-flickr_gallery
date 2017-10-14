import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'

import apiKey from '../config'


// Contruct proper Flickr image url from json photo info
function constructImgURL(photo) {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
}

// Component for displaying results
class PhotoContainer extends Component {
  state = {
    photos: [],
    searchTerm: null
  }

  // function to search Flickr images and set state for rerendering
  updatePhotos = (searchTerm) => {
    if (searchTerm !== '') {
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=16&format=json&nojsoncallback=1`
      axios.get(url).then(response => {
        let photos = []
        response.data.photos.photo.forEach((photo) => {
          const imgURL = constructImgURL(photo)
          photos.push([imgURL, photo.id])
        })
        this.setState({
          photos,
          searchTerm
        })
      })
    }
  }

  // update state on first mount
  componentWillMount() {
    const searchTerm = this.props.location.pathname.slice(1, -1)
    if (searchTerm === 'frontend-project11-flickr_gallery') {
      searchTerm == null
    }
    this.updatePhotos(searchTerm)
  }

  // update state on receiving new location
  componentWillReceiveProps(nextProps) {
    const searchTerm = nextProps.location.pathname.slice(1, -1)
    if (searchTerm === 'frontend-project11-flickr_gallery') {
      searchTerm == null
    }
    this.updatePhotos(searchTerm)
  }

  render()  {
    return (
      <div className="photo-container">
        {this.state.searchTerm !== null && <h2>{this.state.searchTerm} images</h2>}
        <ul id='photo-list'>
          {this.state.photos.map((photo) => {
            return (
              <li key={photo[1]}>
                <img src={photo[0]} alt={photo[1]} />
              </li>
            )
          })}
          {/* Not Found Message */}
          {this.state.searchTerm !== null && this.state.photos.length == 0 &&
            (
              <li className="not-found">
                <h3>No results found</h3>
                <p>That search did not return any results, please try again.</p>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(PhotoContainer)

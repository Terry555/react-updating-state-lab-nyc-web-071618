// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p' }
      }
  }

  handleClickBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})
    })
  }

  handleClickResolution = () => {
    this.setState({settings: {...this.state.settings, video: {...this.state.settings.video, resolution: '720p'}},
  })
}


  render(){
    return(
      <div>
        <button onClick={this.handleClickBitrate} className="bitrate">
          Bitrate: {this.state.settings.bitrate}
        </button>
        <button onClick={this.handleClickResolution} className="resolution">
          Resolution: {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }

}

export default YouTubeDebugger

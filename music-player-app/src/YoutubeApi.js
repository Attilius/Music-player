import React from 'react';
import YouTube from 'react-youtube';

class YoutubeApi extends React.Component {
  render() {
    const opts = {
      height: '250',
      width: '250',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
    <YouTube videoId="aGSKrC7dGcY" opts={opts} onReady={this._onReady} />);
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.stopVideo();
  }
}

export default YoutubeApi;
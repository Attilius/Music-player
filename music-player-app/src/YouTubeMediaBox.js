import YouTube from 'react-youtube';
import TrackDatas from "./TrackDatas";


function YouTubeMediaBox({ youtubeId }) {
    
    const opts = {
        height: '250',
        width: '250',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      
    return(
        <div className="main">
            <div id="player">
                <YouTube videoId={ youtubeId } opts={opts} />
            </div>
            <TrackDatas />
        </div>
    );
}

export default YouTubeMediaBox;
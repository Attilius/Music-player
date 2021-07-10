import YouTube from 'react-youtube';
import TrackDatas from "./TrackDatas";

function YouTubeMediaBox({ youtubeId, event_ }) {
    
    const opts = {
        height: '250',
        width: '250',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
          controls: 1,
        },
        onReady: (event) => {
            const player = event.target;
           if (event_ === "play") {
               player.playVideo();
            } else if (event_ === "stop") {
                player.stopVideo();
            } else if (event_ === "pause") {
                player.pauseVideo();
            }
        },
    };

    return(
        <div className="main">
            <div id="player">
                <YouTube videoId={ youtubeId } opts={ opts } onReady={opts.onReady} />
            </div>
            <TrackDatas />
        </div>
    );
}

export default YouTubeMediaBox;
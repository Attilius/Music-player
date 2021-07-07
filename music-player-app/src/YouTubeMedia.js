import YoutubeApi from "./YoutubeApi";
import TrackDatas from "./TrackDatas";


function YouTubeMedia() {
    return(
        <div className="main">
            <div id="player">
                <YoutubeApi />
            </div>
            <TrackDatas />
            
        </div>
    );
}

export default YouTubeMedia;
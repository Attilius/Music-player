import YoutubeApi from "./YoutubeApi";
import TrackDatas from "./TrackDatas";


function YouTubeMediaBox() {
    return(
        <div className="main">
            <div id="player">
                <YoutubeApi />
            </div>
            <TrackDatas />
        </div>
    );
}

export default YouTubeMediaBox;
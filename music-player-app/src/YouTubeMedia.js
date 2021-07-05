import YoutubeApi from "./YoutubeApi";
import TrackDatas from "./TrackDatas";
import PowerButton from "./PowerButton";

function YouTubeMedia() {
    return(
        <div className="main">
            <div id="player">
                <YoutubeApi />
            </div>
            <TrackDatas />
            <PowerButton />
        </div>
    );
}

export default YouTubeMedia;
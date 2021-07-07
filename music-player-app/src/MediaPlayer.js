import YouTubeMedia from './YouTubeMedia';
import ControlPanel from './ControlPanel';
import PowerButton from "./PowerButton";

function MediaPlayer() {
    return(
        <div className="media-content">
            <div className="media-player-content">
                <div className="main">
                    <YouTubeMedia />
                    <PowerButton />
                </div>
                <ControlPanel />
            </div>
        </div>
    );
}

export default MediaPlayer;
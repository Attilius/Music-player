import YouTubeMedia from './YouTubeMedia';
import ControlPanel from './ControlPanel';

function MediaPlayer() {
    return(
        <div className="media-content">
            <div className="media-player-content">
                <div className="main">
                    <YouTubeMedia />
                </div>
                <ControlPanel />
            </div>
        </div>
    );
}

export default MediaPlayer;
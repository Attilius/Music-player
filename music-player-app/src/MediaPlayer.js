import { useState } from 'react';
import YouTubeMedia from './YouTubeMedia';
import ControlPanel from './ControlPanel';
import PowerButton from './PowerButton';

function MediaPlayer() {
    const [powerBtnClassName, setpowerBtnClassName] = useState("power-off");

    const handleChangePowerBtnClassList = () => {
        if (powerBtnClassName === "power-off") {
            setpowerBtnClassName("power-on");
        } else {
            setpowerBtnClassName("power-off");
        }
    }

    return(
        <div className="media-content">
            <div className="media-player-content">
                <div className="main">
                    <YouTubeMedia />
                    <PowerButton  className={ powerBtnClassName } onChange={ handleChangePowerBtnClassList } />
                </div>
                <ControlPanel />
            </div>
        </div>
    );
}

export default MediaPlayer;
import { useState } from 'react';
import YouTubeMediaBox from './YouTubeMediaBox';
import ControlPanel from './ControlPanel';
import PowerButton from './PowerButton';

function MediaPlayer() {
    const [powerBtnClassName, setPowerBtnClassName] = useState("power-off");
    const [controlBtnsClassName, setControlBtnsClassName] = useState("controlpanel");

    const handleChangePowerBtnClassList = () => {
        if (powerBtnClassName === "power-off") {
            setPowerBtnClassName("power-on");
            setControlBtnsClassName("controlpanel");
        } else {
            setPowerBtnClassName("power-off");
            setControlBtnsClassName("hidden");
        }
    }

    return(
        <div className="media-content">
            <div className="media-player-content">
                <div className="main">
                    <YouTubeMediaBox />
                    <PowerButton  className={ powerBtnClassName } onChange={ handleChangePowerBtnClassList } />
                </div>
                <ControlPanel className={ controlBtnsClassName } />
            </div>
        </div>
    );
}

export default MediaPlayer;
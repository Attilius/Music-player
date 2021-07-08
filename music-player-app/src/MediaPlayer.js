import { useState } from 'react';
import YouTubeMediaBox from './YouTubeMediaBox';
import ControlPanel from './ControlPanel';
import PowerButton from './PowerButton';

function MediaPlayer() {
    const [powerBtnClassName, setPowerBtnClassName] = useState("power-off");
    const [controlBtnsClassName, setControlBtnsClassName] = useState("hidden");
    const [playBtnClassName, setPlayBtnClassName] = useState("btn");
    const [backwardBtnClassName, setBackwardBtnClassName] = useState("btn");
    const [forwardBtnClassName, setForwardBtnClassName] = useState("btn");
    const [stopBtnClassName, setStopBtnClassName] = useState("btn");
    const [pauseBtnClassName, setPauseBtnClassName] = useState("btn");

    const handleChangePowerBtnClassList = () => {
        if (powerBtnClassName === "power-off") {
            setPowerBtnClassName("power-on");
            setControlBtnsClassName("controlpanel");
        } else {
            setPowerBtnClassName("power-off");
            setControlBtnsClassName("hidden");
        }
    }

    const handleChangeControlBtnClassName = (e) => {

        const btnId = e.nativeEvent.path[1].id;
            switch (btnId) {
                case "play_":
                    setPlayBtnClassName("active");
                    setBackwardBtnClassName("btn");
                    setForwardBtnClassName("btn");
                    setStopBtnClassName("btn");
                    setPauseBtnClassName("btn");
                    break;
                case "backward_":
                    setPlayBtnClassName("btn");
                    setBackwardBtnClassName("active");
                    setForwardBtnClassName("btn");
                    setStopBtnClassName("btn");
                    setPauseBtnClassName("btn");
                    break;
                case "forward_":
                    setPlayBtnClassName("btn");
                    setBackwardBtnClassName("btn");
                    setForwardBtnClassName("active");
                    setStopBtnClassName("btn");
                    setPauseBtnClassName("btn");
                    break;
                case "stop_":
                    setPlayBtnClassName("btn");
                    setBackwardBtnClassName("btn");
                    setForwardBtnClassName("btn");
                    setStopBtnClassName("active");
                    setPauseBtnClassName("btn");
                    break;
                case "pause_":
                    setPlayBtnClassName("btn");
                    setBackwardBtnClassName("btn");
                    setForwardBtnClassName("btn");
                    setStopBtnClassName("btn");
                    setPauseBtnClassName("active");
                    break;
            
                default:
                    break;
            }
    }

    return(
        <div className="media-content">
            <div className="media-player-content">
                <div className="main">
                    <YouTubeMediaBox />
                    <PowerButton  className={ powerBtnClassName } onChange={ handleChangePowerBtnClassList } />
                </div>
                <ControlPanel className={ controlBtnsClassName } 
                              playBtnClassName={ playBtnClassName }
                              backwardBtnClassName={ backwardBtnClassName }
                              forwardBtnClassName={ forwardBtnClassName }
                              stopBtnClassName={ stopBtnClassName }
                              pauseBtnClassName={ pauseBtnClassName }
                              onChange={ handleChangeControlBtnClassName } />
            </div>
        </div>
    );
}

export default MediaPlayer;
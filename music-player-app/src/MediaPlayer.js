import { useState } from 'react';
import YouTubeMediaBox from './YouTubeMediaBox';
import ControlPanel from './ControlPanel';
import PowerButton from './PowerButton';

function MediaPlayer() {
    const [powerBtnClassName, setPowerBtnClassName] = useState("power-off");
    const [controlBtnsClassName, setControlBtnsClassName] = useState("hidden");
    const [playBtnClassName, setPlayBtnClassName] = useState("btn_");
    const [backwardBtnClassName, setBackwardBtnClassName] = useState("btn_");
    const [forwardBtnClassName, setForwardBtnClassName] = useState("btn_");
    const [stopBtnClassName, setStopBtnClassName] = useState("btn_");
    const [pauseBtnClassName, setPauseBtnClassName] = useState("btn_");

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
                    setBackwardBtnClassName("btn_");
                    setForwardBtnClassName("btn_");
                    setStopBtnClassName("btn_");
                    setPauseBtnClassName("btn_");
                    break;
                case "backward_":
                    setPlayBtnClassName("btn_");
                    setBackwardBtnClassName("active");
                    setForwardBtnClassName("btn_");
                    setStopBtnClassName("btn_");
                    setPauseBtnClassName("btn_");
                    break;
                case "forward_":
                    setPlayBtnClassName("btn_");
                    setBackwardBtnClassName("btn_");
                    setForwardBtnClassName("active");
                    setStopBtnClassName("btn_");
                    setPauseBtnClassName("btn_");
                    break;
                case "stop_":
                    setPlayBtnClassName("btn_");
                    setBackwardBtnClassName("btn_");
                    setForwardBtnClassName("btn_");
                    setStopBtnClassName("active");
                    setPauseBtnClassName("btn_");
                    break;
                case "pause_":
                    setPlayBtnClassName("btn_");
                    setBackwardBtnClassName("btn_");
                    setForwardBtnClassName("btn_");
                    setStopBtnClassName("btn_");
                    setPauseBtnClassName("active");
                    break;
            
                default:
                    break;
            }
    }

    const handleMouseUp = () => {
        setBackwardBtnClassName("btn_");
        setForwardBtnClassName("btn_");
        setStopBtnClassName("btn_");
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
                              onChange={ handleChangeControlBtnClassName }
                              onMouseUp={ handleMouseUp } />
            </div>
        </div>
    );
}

export default MediaPlayer;
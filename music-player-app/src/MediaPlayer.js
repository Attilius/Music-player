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
    const setters = [setPlayBtnClassName, setPauseBtnClassName ];
    const [youtubeId, setYoutubeId] = useState("aGSKrC7dGcY");
    const [controlEvent, setControlEvent] = useState("");

    const handleChangePowerBtnClassList = () => {
        if (powerBtnClassName === "power-off") {
            setPowerBtnClassName("power-on");
            setControlBtnsClassName("controlpanel");
        } else {
            setters.map(setter => { return  setter("btn_"); });
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
                    handlePlayControl(e);
                    break;
                case "backward_":
                    setPlayBtnClassName("btn_");
                    setBackwardBtnClassName("active");
                    setForwardBtnClassName("btn_");
                    setStopBtnClassName("btn_");
                    setPauseBtnClassName("btn_");
                    setYoutubeId("aGSKrC7dGcY");
                    break;
                case "forward_":
                    setPlayBtnClassName("btn_");
                    setBackwardBtnClassName("btn_");
                    setForwardBtnClassName("active");
                    setStopBtnClassName("btn_");
                    setPauseBtnClassName("btn_");
                    setYoutubeId("saZPllGHzT8");
                    break;
                case "stop_":
                    setPlayBtnClassName("btn_");
                    setBackwardBtnClassName("btn_");
                    setForwardBtnClassName("btn_");
                    setStopBtnClassName("active");
                    setPauseBtnClassName("btn_");
                    handlePlayControl(e);
                    break;
                case "pause_":
                    setPlayBtnClassName("btn_");
                    setBackwardBtnClassName("btn_");
                    setForwardBtnClassName("btn_");
                    setStopBtnClassName("btn_");
                    setPauseBtnClassName("active");
                    handlePlayControl(e);
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

    const handlePlayControl = (e) => {
        setControlEvent(e.target.className.split(' ')[1].split('-')[1]);
    }

    return(
        <div className="media-content">
            <div className="media-player-content">
                <div className="main">
                    <YouTubeMediaBox youtubeId={ youtubeId } event_={ controlEvent } />
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
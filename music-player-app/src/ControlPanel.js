
function ControlPanel({ className, playBtnClassName, backwardBtnClassName, 
                        forwardBtnClassName, stopBtnClassName, pauseBtnClassName, onChange, onMouseUp }) {
    
    return (
        <div className={ className }>
                <ul id="control-btns">
                    <li><button id="play_" 
                                className={ playBtnClassName }
                                onClick={ onChange }>
                                <i className="fas fa-play"></i></button></li>
                    <li><button id="backward_" 
                                className={ backwardBtnClassName }
                                onMouseDown={ onChange }
                                onMouseUp={ onMouseUp }>
                                <i className="fas fa-step-backward"></i></button></li>
                    <li><button id="forward_" 
                                className={ forwardBtnClassName }
                                onMouseDown={ onChange }
                                onMouseUp={ onMouseUp }>
                                <i className="fas fa-step-forward"></i></button></li>
                    <li><button id="stop_" 
                                className={ stopBtnClassName }
                                onMouseDown={ onChange }
                                onMouseUp={ onMouseUp }>
                                <i className="fas fa-stop"></i></button></li>
                    <li><button id="pause_" 
                                className={ pauseBtnClassName }
                                onClick={ onChange }>
                                <i className="fas fa-pause"></i></button></li>
                </ul>
        </div>
    )
}

export default ControlPanel;
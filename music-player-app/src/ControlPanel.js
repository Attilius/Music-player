
function ControlPanel() {
    return (
        <div className="controlpanel">
                <ul id="control-btns">
                    <li><button id="play_" className="btn"><i className="fas fa-play"></i></button></li>
                    <li><button id="backward_" className="btn"><i className="fas fa-step-backward"></i></button></li>
                    <li><button id="forward_" className="btn"><i className="fas fa-step-forward"></i></button></li>
                    <li><button id="stop_" className="btn"><i className="fas fa-stop"></i></button></li>
                    <li><button id="pause_" className="btn"><i className="fas fa-pause"></i></button></li>
                </ul>
            </div>
    )
}

export default ControlPanel;
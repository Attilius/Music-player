
function ControlPanel() {
    return (
        <div className="controlpanel">
                <ul id="control-btns">
                    <li><a id="play" className="btn"><i className="fas fa-play"></i></a></li>
                    <li><a id="backward" className="btn"><i className="fas fa-step-backward"></i></a></li>
                    <li><a id="forward" className="btn"><i className="fas fa-step-forward"></i></a></li>
                    <li><a id="stop" className="btn"><i className="fas fa-stop"></i></a></li>
                    <li><a id="pause" className="btn"><i className="fas fa-pause"></i></a></li>
                </ul>
            </div>
    )
}

export default ControlPanel;
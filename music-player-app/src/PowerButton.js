import { useState } from 'react';

function PowerButton() {
    const [className, setClassName] = useState("power-off");

    const changeClassList = () => {
        if (className === "power-off") {
            setClassName("power-on");
        } else {
            setClassName("power-off");
        }
    }

    return (
        <button 
            id="power_" 
            className={ className }
            onClick={changeClassList}>
            <i className="fas fa-power-off"></i>
        </button>
    );
}

export default PowerButton;
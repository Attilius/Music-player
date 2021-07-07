
function PowerButton({ className, onChange }) {

    return (
        <button 
            id="power_" 
            className={ className }
            onClick={ onChange }>
            <i className="fas fa-power-off"></i>
        </button>
    );
}

export default PowerButton;
import "./Bulb.css";

function Bulb({ active, color, onClick, label }) {

    return (
        <div
            role="button"
            aria-pressed={active}
            onClick={onClick}
            className={`bulb ${color} ${active ? "active" : ""}`}
            title={`${label}`}
        />
    );
}

export default Bulb;
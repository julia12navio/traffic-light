import React, { useState } from "react";
import Bulb from "./Bulb";
import "./TrafficLight.css";

function TrafficLight() {
    const [color, setColor] = useState("red");
    const baseColors = ["red", "yellow", "green"];
    /*AL AÑADIR COLOR AÑADIRLO TAMBIÉN EN Bulb.css */
    const extraOrder = ["purple", "blue", "orange"];
    const [extras, setExtras] = useState([]);
    const allColors = [...baseColors, ...extras];

    const randomColor = () => {
        let newColor;
        do {
            newColor = allColors[Math.floor(Math.random() * allColors.length)];
        } while (newColor === color);
        setColor(newColor);
    };

    const addColor = () => {
        const next = extraOrder[extras.length];
        if (!next) return;
        setExtras(prev => [...prev, next]);
    };

    const removeColor = () => {
        if (extras.length === 0) return;
        const removed = extras[extras.length - 1];
        setExtras(prev => prev.slice(0, -1));
        if (color === removed) {
            setColor("red"); 
        }
    };

    return (
        <div className="fullscreen-center">
            <div className="layout-row">

                <div className="trafficlight-box">
                    {allColors.map(c => (
                        <Bulb
                            key={c}
                            label={c}
                            color={c}
                            active={color === c}
                            onClick={() => setColor(c)}
                        />
                    ))}
                </div>

                <div className="buttons-box">
                    <button className="btns" onClick={randomColor}>
                        Cambiar luz
                    </button>
                    <button
                        className="btns"
                        onClick={addColor}
                        disabled={extras.length >= extraOrder.length}
                    >
                        Añadir color
                    </button>
                    <button
                        className="btns"
                        onClick={removeColor}
                        disabled={extras.length === 0}
                    >
                        Eliminar color
                    </button>
                </div>

            </div>
        </div>
    );
}

export default TrafficLight;
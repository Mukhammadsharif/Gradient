import React, { useState, useEffect } from "react";

export default function ColoredUserPic({ size, src, colors, hoverColors, colorWidth, backgroundColor, margin }) {
    const ava = require(`${src}`)
    const [color, setColor] = useState(false)
    const ImageSize = size - margin - colorWidth
    const gradient = color ? hoverColors : colors
    const changeColor = () => {
        setColor(true)
    }
    const Color = () => {
        setColor(false)
    }

    return (
        <div
            className='hoverable'
            onMouseEnter={changeColor}
            onMouseLeave={Color}
            style={{borderRadius: '120px', borderWidth: '2px', borderColor: 'blue',
                    width: `${size}px`, height: `${size}px`,
                    background: `linear-gradient(${gradient[0]},${gradient[1]})`,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    padding: `${margin}px`,
            }}>
            <div style={{backgroundColor: `${backgroundColor}`, borderRadius: '120px', borderWidth: '2px',}}>
                <img
                    src={ava.default}
                    alt="Avatar"
                    style={{width: `${ImageSize}px`, height: `${ImageSize}px` , borderRadius: '120px', margin: `${colorWidth}px`}}/>
            </div>
        </div>
    )
}
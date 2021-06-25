import React, { Component } from 'react';

export default function CircleBlur({top, left, size, color, opacity}) {
    return (
        <div style={{
            position: 'absolute', 
            top: top  + 'px', 
            left: left + 'px',
            backgroundColor: color,
            height: size + 'px',
            width: size + 'px',
            borderRadius: size + 'px',
            opacity: opacity + '%',
            boxShadow: 0+'px '+ 0+'px '+ 25+'px '+ color,
        }} />
    )
}

import React, {useState} from 'react';

export const OnOff = () => {

    let [on, setOn] = useState(false)

    // CSS =======================================================================
    const OnOStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '5px',
        padding: '0 5px 0 5px',
        backgroundColor: on ? 'green' : 'white',
        cursor: 'pointer',
    }
    const OffStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '5px',
        padding: '0 5px 0 5px',
        backgroundColor: on ? 'white' : 'red',
        cursor: 'pointer',
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red',
    }
    const onOffLightStyle = {
        backgroundColor: on ? "green" : "red"
    }
    // CSS =======================================================================

    return (
        <div>
            <button style={OnOStyle} onClick={ () => { setOn(true) } }>ON</button>
            <button style={OffStyle} onClick={ () => { setOn(false) } }>OFF</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};
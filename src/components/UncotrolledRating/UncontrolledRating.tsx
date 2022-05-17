import React, {useState} from "react";


export function UncontrolledRating() {

    let [value, setValue] = useState(0)

    const buttonClass = {
        border: '0 solid white',
        backgroundColor: 'white'
    }

    return (
        <div>
             <button style={buttonClass} onClick={ () => setValue(1) }><Star selected={value >= 1}/></button>
             <button style={buttonClass} onClick={ () => setValue(2) }><Star selected={value >= 2}/></button>
             <button style={buttonClass} onClick={ () => setValue(3) }><Star selected={value >= 3}/></button>
             <button style={buttonClass} onClick={ () => setValue(4) }><Star selected={value >= 4}/></button>
             <button style={buttonClass} onClick={ () => setValue(5) }><Star selected={value >= 5}/></button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean;
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span>★ </span>
    } else {
        return <span>☆ </span>
    }
}
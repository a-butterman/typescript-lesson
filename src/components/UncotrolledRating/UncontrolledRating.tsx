import React, {useState} from "react";


export function UncontrolledRating() {

    let [value, setValue] = useState(0)

    const buttonClass = {
        border: '0 solid white',
        backgroundColor: 'white'
    }

    return (
        <div>
             <button style={buttonClass} onClick={ () => setValue(value = 1 ? 1 : 0) }><Star selected={value >= 1}/></button>
             <button style={buttonClass} onClick={ () => setValue(value = 2 ? 2 : 0) }><Star selected={value >= 2}/></button>
             <button style={buttonClass} onClick={ () => setValue(value = 3 ? 3 : 0) }><Star selected={value >= 3}/></button>
             <button style={buttonClass} onClick={ () => setValue(value = 4 ? 4 : 0) }><Star selected={value >= 4}/></button>
             <button style={buttonClass} onClick={ () => setValue(value = 5 ? 5 : 0) }><Star selected={value >= 5}/></button>
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
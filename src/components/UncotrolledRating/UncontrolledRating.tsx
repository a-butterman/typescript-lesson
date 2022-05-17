import React, {useState} from "react";


export function UncontrolledRating() {

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value >= 1}/> <button onClick={ () => setValue(value = 1 ? 1 : 0) }>1</button>
            <Star selected={value >= 2}/> <button onClick={ () => setValue(value = 2 ? 2 : 0) }>2</button>
            <Star selected={value >= 3}/> <button onClick={ () => setValue(value = 3 ? 3 : 0) }>3</button>
            <Star selected={value >= 4}/> <button onClick={ () => setValue(value = 4 ? 4 : 0) }>4</button>
            <Star selected={value >= 5}/> <button onClick={ () => setValue(value = 5 ? 5 : 0) }>5</button>
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
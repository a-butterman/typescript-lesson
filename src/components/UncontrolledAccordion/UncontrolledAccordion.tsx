import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}

// component ===================================================================
export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState (true)

    if (!collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <button onClick={() => setCollapsed(collapsed ? false : true)}>toggle</button>
                <AccordionBody />
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <button onClick={() => setCollapsed(collapsed ? false : true)}>toggle</button>
            </div>
        )
    }
}


// accordion ===================================================================
type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3> { props.title } </h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>REACT</li>
        </ul>
    )
}
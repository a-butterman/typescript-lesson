import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

// accordion title ===================================================================
    type AccordionTitlePropsType = {
        title: string;
        onClick: () => void
    }
    const TitleStyle = {
        cursor: 'pointer',
    }
    function AccordionTitle(props: AccordionTitlePropsType) {
        return <h3 style={TitleStyle} onClick={ () => {props.onClick()}} > {props.title} </h3>
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
// component ===================================================================
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}
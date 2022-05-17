import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/UncotrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    return (
        <div>
            <PageTitle name={"Arthur"}/>
            <h3> ----- reaction button ----- </h3>
            <OnOff/>

            <h3> ----- reaction star (first string) ----- </h3>
            <UncontrolledRating/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <h3> ----- reaction accordion ----- </h3>
            <UncontrolledAccordion titleValue={'Toggle skills'}/>
            <Accordion titleValue={'Skills'} collapsed={true}/>
            <Accordion titleValue={'Hobby'} collapsed={false}/>
        </div>
    )
}

type PageTitlePropsType = {
    name: string;
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>Hello, { props.name }!</h1>
    )
}


export default App;

import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/UncotrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

const AppStyle = {marginLeft: '40px'}

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div style={AppStyle}>
            <PageTitle name={"Arthur"}/>

            <h3> ----- reaction button ----- </h3>
            <OnOff/>

            <h3> ----- reaction star ----- </h3>
            <UncontrolledRating/>
            ---
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <h3> ----- reaction accordion ----- </h3>
            <UncontrolledAccordion titleValue={'Toggle skills (click me)'}/>
            ---
            <Accordion titleValue={'Hobby'} collapsed={false}/>

            <h3> -----  ----- </h3>
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

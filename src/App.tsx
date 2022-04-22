import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div>
            <PageTitle name={"Arthur"}/>
            <PageTitle name={"Misha"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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

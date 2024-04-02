import { useState } from "react";

export default function SharedButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <ThisButton count = {count} onClick = {handleClick}/>
            <br/>
            <ThisButton count = {count} onClick = {handleClick}/>
        </div>
    );
}

function ThisButton({count, onClick}) {
    return (
        <button onClick = {onClick}>
            Clicked {count} times!
        </button>
    );
}
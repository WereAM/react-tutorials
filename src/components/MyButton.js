import '../App.css';
import { useState } from 'react';

export default function MyButton(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
    // alert('App is loading!');
  }

  return(
    <button onClick={handleClick}>
      Clicked {count} times!
    </button>
  );

    // return(
    //   <button className="thisButton">
    //     I'm a button
    //   </button>
    // );
  }
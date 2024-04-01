import '../App.css';

export default function MyButton(){
  function handleClick(){
    alert('App is loading!');
  }

  return(
    <button onClick={handleClick}>
      Click me!
    </button>
  );

    // return(
    //   <button className="thisButton">
    //     I'm a button
    //   </button>
    // );
  }
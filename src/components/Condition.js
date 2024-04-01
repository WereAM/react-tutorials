import MyButton from "./MyButton";
import Profile from "./Profile";

export default function Content() {
    // let content;

    // if(!true) {
    //     content = <MyButton/>;
    // }
    // else {
    //     content = <Profile/>;
    // }

    // return (
    //     <div>
    //         {content}
    //     </div>
    // );

    // return(
    //     <div>
    //         {!true? (
    //             <MyButton/>
    //         ) : (
    //             <Profile/>
    //         )}
    //     </div>

    return(
        <div>
            {true && <Profile/>}
        </div>
    )
}
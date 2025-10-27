function doSomething (){
    console.log("Hello");
    console.log(event);
}

function printBye () {
     console.log("Bye!");
}

function handledoubleClick (){
    console.log("you double clicked");
}

export default function Button () {
    return (
        <div>
            <button onClick = {doSomething}>Click me!</button>
            <p onMouseOver = {printBye}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti architecto quos distinctio doloremque, rem facilis temporibus natus beatae!
                Sed aliquid beatae maxime eveniet provident ab eos atque porro ipsam?
            </p>
            <button onDoubleClick={handledoubleClick}>Double click me!</button>
        </div>
    )
}
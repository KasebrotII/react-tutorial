import { useEffect } from "react";

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
    useEffect(() => {
        console.log('useEffect function called!');

        return () => console.log('unmounting!');
    }, []);

    return (
        <>
        <p>You've cllicked the button {numberOfClicks} times</p>
        <button onClick={onIncrement}>Click Me!</button>
        </>
    );
}
import { useState, useEffect } from "react";

export const HomeView = () => {

    const [count, setCount] = useState(1);

    useEffect( () => {
        console.log("welcome Count är " + count); //När sidan laddas
        // return () => {
        //     console.log("Goodbye") //När vi lämnar sidan
        // };
    },[count]); // Villkor för att trigga UseEffect


    return (
        <div>
            <h1>This is the Home View</h1>
            <h1>Count is: {count}</h1>
            <button onClick={ () => setCount(count +1)}>+</button>
            <button onClick={ () => setCount(count +5)}>+5</button>
            <button onClick={ () => setCount(count +10)}>+10</button>
            <button onClick={ () => setCount(count -1)} disabled={count === 0}>-</button>
            <button onClick={ () => setCount(0)}>RESET</button>
        </div>
    );
};


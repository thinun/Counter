import React,{useState} from 'react';


function Counter(){
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number+1)
    }

    const decrement = () => {
        setNumber(number-1)
    }

    const reset=()=>{
        setNumber(0)
    }

    return (
        <div>
            <p>{number}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}

export default Counter
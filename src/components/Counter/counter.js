import React from 'react'
import "./counter.css"
import Count from './count'

export default function Counter() {

    let [count,setCount] = React.useState(0);

    function subtract(){
        setCount( preVal => preVal - 1)
    }

    console.log("Counter components render");

    return (
        <div className='counter'>
            <button className='counter--minus' onClick={ subtract }>-</button>
            <Count number={count} />
            <button className='counter--plus' onClick={function(){
                setCount(count ++)
            }}>+</button>
        </div>
    )
}

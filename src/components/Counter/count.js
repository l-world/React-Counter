import React from 'react'

export default function Counter(props) {
    console.log("Count components render");
    return (
        <div className='counter--count'>
            <h1>{props.number}</h1>
        </div>
    )
}

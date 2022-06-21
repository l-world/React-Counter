import React from 'react'

export default function addItem() {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [thingsArr, setThingsArr] = React.useState(['Thing 1', 'Thing 2'])

    function addItem() {
        setThingsArr(preVal => [...preVal, `Thing ${preVal.length + 1}`])
    }
    const thingsList = thingsArr.map(thing => <h1 key={thing}>{thing}</h1>);
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsList}
        </div>
    )
}

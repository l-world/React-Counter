import React from 'react'
import './box.css'

export default function Box(props) {

    const [boxStatus ] = React.useState(props.on);

    const styles = {
        backgroundColor: boxStatus ? "#222" : "transparent",  
    }

    /* function toggleBox(){
        console.log("clicked!")
        setBoxStatus( prevStatus => !prevStatus)
    } */

    return (
        <div className='box' style={styles} onClick= { props.toggle }></div>
    )
}

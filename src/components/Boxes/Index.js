import React from 'react'
import Box from "./Box"
import boxes from './boxes'


export default function Index() {

    const [squares, setSquares] = React.useState(boxes)

    function toggle(id){
        console.log(id);
        /* setSquares( prevSquares => {
            const newSquares = [];
            for(let i = 0; i < prevSquares.length; i++){
                const currentSquares = prevSquares[i];
                if(currentSquares.id === id){
                    const updatedSquares = {
                        ...currentSquares,
                        on:!currentSquares.on
                    }
                    newSquares.push(updatedSquares);
                }else {
                    newSquares.push(currentSquares);
                }
            }
            return newSquares;
        }) */
        setSquares( prevSquares => {
            return prevSquares.map( square => {
                return square.id === id ? {...square,on:!square.on} : square
            })
        })
        
    }

    const boxElemets = squares.map( square => (
        <Box 
            on={ square.on } 
            key={ square.id }  
            toggle={ () => toggle(square.id) } 
        />
    ))
    
    return (
        <div>
            { boxElemets }
        </div>
    )
}

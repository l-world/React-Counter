import React from 'react'
import Navbar from './components/MemeGenerator/Navbar/navbar'
import Main from './components/MemeGenerator/Main/main'
import Counter  from './components/Counter/counter';
import Boxs from "./components/Boxes/Index"

export default function App() {    
    return (
        <div className='container'>
            <Navbar />
            <Main />
            <Counter />
            <Boxs />
        </div>
    )
}

import React from 'react'
import Icon from '../../../image/icon.svg'
import memesData from '../../../memeData.json'
import './main.css'

export default function Main() {

    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FHjQI8zJTyi8yAPepM1VOUrh0vq7JO3BTA&usqp=CAU"
    })

    const [ allMemeImages ] = React.useState(memesData);
    
    function getRandomImgUrl(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme( preMeme => ({
                ...preMeme,
                randomImage:url
            })
        )
    }

   /*  function handleInputChange(e){
        console.log(e);
        setMeme( preMeme => {
            return {
                ...preMeme,
                topText:e,
                bottomText:e.value
            }
        })
    } */

    return (
        <main className='main'>
            <div className='form'>
                <input  type="text" 
                        value={meme.topText}
                        className='form--input' 
                        placeholder='Top text' 
                        onChange={ e => {
                            setMeme( preMeme => {
                                return {
                                    ...preMeme,
                                    topText:e.target.value
                                }
                            })
                        }}
                        
                />
                {/* 
                    onChange={ e => {
                            setMeme( preMeme => {
                                return {
                                    ...preMeme,
                                    bottomText:e.target.value
                                }
                            })
                        }}
                */}
                <input type="text" value={meme.bottomText} className='form--input' placeholder='Button text'/>
                <button className='form--btn' onClick={ getRandomImgUrl } ><img src={Icon} alt="memes-img" /></button>
            </div>
            <div className="main--img">
                <h2 className='top-text'>{meme.topText}</h2>
                <img src={meme.randomImage} alt="" />
                <h2 className='bottom-text'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}
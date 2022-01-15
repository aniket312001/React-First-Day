import React from 'react'


const country = "India"

function Netflixlist(){
    return (
    <>
        <h1>Top Netflix Series Available in {country}</h1>
        <p className='text'>Here is the List </p>
        <ol>
            <li>Cobra Kai</li>
            <li>One Pieces</li>
            <li>Game Of Throne</li>
            <li>Breaking Bad</li>
            <li>Lucifer</li>
        </ol>
    
    </>
    )
}

export default Netflixlist
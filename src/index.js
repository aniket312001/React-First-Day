import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const country = "India"

const CurrentDate = new Date().toLocaleDateString()
const currentTime = new Date().toLocaleTimeString()
const img = "https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"

const styleObject = {
  color:"brown",
  textAlign:"center"  //  text-align
}

const colorObj = {}

if(true){
  colorObj.color = "blue"
}else {
  colorObj.color = "red"
}

ReactDOM.render(
  <>
    <h1>Top Netflix Series Available in {country}</h1>
    <h4>addition is { 3+4 } </h4>
    <h5>{`Todays Date is ${CurrentDate}`}</h5>
    <h5>{`Todays Date is ${currentTime} `}</h5>
    <br/>

    <h1 contentEditable="true"> Hello world</h1>  {/* JSX Attribute */ } 
    <img src={img}></img>
    <img src={img}></img>
    <img src={img}></img>

    <p className='text'>Here is the List </p>
    <ol>
      <li>Cobra Kai</li>
      <li>One Pieces</li>
      <li>Game Of Throne</li>
      <li>Breaking Bad</li>
      <li>Lucifer</li>
    </ol>

    <p style={styleObject} >Bye see you later</p>              {/* inLine Css */}

    <h2 style={colorObj}>Bye</h2>

  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

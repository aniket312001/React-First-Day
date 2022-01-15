import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Netflixlist from './Netflixlist';
import Timedisplay from './Timedisplay';
import Imagecomp from './Imagecomp';



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
    
    <Timedisplay></Timedisplay>
    
    <br/>
    <Imagecomp></Imagecomp>
    
    <br></br>
    
    <Netflixlist></Netflixlist>

    <p style={styleObject} >Bye see you later</p>              {/* inLine Css */}

    <h2 style={colorObj}>Bye</h2>

  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

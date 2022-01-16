import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Netflixlist from './Netflixlist';
import Timedisplay from './Timedisplay';
import Imagecomp from './Imagecomp';

import App,{favProg,App2} from './App';
import { add, div, mult, sub } from './Arithmetic';



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

    <h1>{App()}</h1>
    <App></App>
    <br></br>
    {favProg}
    <br></br>
    {App2()}

    <br></br>
    <br></br>
    <br></br>
    <h2>Arithmetic Operations</h2>

    <h3>Addition is {add(4,5)}</h3>
    <h3>Substration is {sub(4,5)}</h3>
    <h3>Multiplication is {mult(4,5)}</h3>
    <h3>Division is {div(12444,275)}</h3>


  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

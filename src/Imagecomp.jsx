import react from "react";


const CurrentDate = new Date().toLocaleDateString()
const currentTime = new Date().toLocaleTimeString()


const img = "https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"

function Imagecomp() {
    return (
        <div>
            <h1 contentEditable="true"> Hello world</h1>  {/* JSX Attribute */ } 
            <img src={img}></img>
            <img src={img}></img>
            <img src={img}></img>

        </div>
    )
}

export default Imagecomp
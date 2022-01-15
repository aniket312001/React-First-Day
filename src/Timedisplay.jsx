import react from "react";


const CurrentDate = new Date().toLocaleDateString()
const currentTime = new Date().toLocaleTimeString()


function Timedisplay() {
    return (
        <div>
            <h4>addition is { 3+4 } </h4>
            <h5>{`Todays Date is ${CurrentDate}`}</h5>
            <h5>{`Todays Date is ${currentTime} `}</h5>
        </div>
    )
}

export default Timedisplay
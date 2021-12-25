//@ts-nocheck
import react from "react"
import "./Result.css"

const Result = () =>{
    return (
        <div className="result">
            <h2>Next player : <span>⭕</span></h2>
            <h2>Player <span>⭕</span> : <span>10</span></h2>
            <h2>Player <span>❌</span> : <span>90</span></h2>
        </div>
    )
}

export default Result;
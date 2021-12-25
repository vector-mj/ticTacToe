//@ts-nocheck
import react from "react"
import "./Board.css"
import Result from "../result/Result"

const Board = () =>{
    return (
        <div className="board">
                {/* row */}
                <div className="btn">⭕</div>
                <div className="btn">❌</div>
                <div className="btn">❌</div>
                {/* row */}
                <div className="btn">❌</div>
                <div className="btn"></div>
                <div className="btn">⭕</div>
                {/* row */}
                <div className="btn">❌</div>
                <div className="btn">⭕</div>
                <div className="btn">⭕</div>
                <Result/>
        </div>
    )
}

export default Board
//@ts-nocheck
import React from "react"
import "./Board.css"
import Result from "../result/Result"
import Button from "../button/Button"

class Board extends React.Component{
    constructor(props){
        super(props)
    }

    buttonGen (i){
        return <Button val={this.props.squares[i]} clickHandler={()=>this.props.onClick(i)}/>
    }

    
    render(){
        // console.log(this.props)
        return (
            <div className="board">
                    {/* row */}
                    {this.buttonGen(0)}
                    {this.buttonGen(1)}
                    {this.buttonGen(2)}
                    {/* row */}
                    {this.buttonGen(3)}
                    {this.buttonGen(4)}
                    {this.buttonGen(5)}
                    {/* row */}
                    {this.buttonGen(6)}
                    {this.buttonGen(7)}
                    {this.buttonGen(8)}
                    <Result info={this.props.status} />
            </div>
        )
    }
}

export default Board
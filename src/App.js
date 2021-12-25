// @ts-nocheck
import './App.css';
import React from 'react';
import Board from './Components/board/Board';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "❌" : "⭕";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const reset=()=>{
      this.setState({
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true
      })
    }
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = <><h2 style={{fontSize:"2rem"}}>Winner : <span style={{color:"gold"}}>{winner}</span></h2><span className='reset' onClick={reset}>🔁</span></>
    } else {
      status = <><h2>Current Player : <span>{this.state.xIsNext ? '❌' : '⭕'}</span></h2><span className='reset' onClick={reset}>🔁</span></> ;
    }
    // console.log(status)
    return(
      <div className='App'>
        <Board 
          squares={current.squares}
          onClick={i => this.handleClick(i)}
          status={status}
        />
      </div>
    )
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;

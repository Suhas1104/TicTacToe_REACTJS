
import './App.css';

import { useState } from "react";

function Square({ value, handleClick }) {


  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  let status="";

  function calcwin(square){
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
    for(let i=0;i<lines.length;i++)
      {
        const [a,b,c]=lines[i]
        if(square[a]&&square[a]==square[b]&&square[b]==square[c])
        return square[a]
      }
      return null
  }
    
  const winner = calcwin(squares);
  if (winner) {
    status = "Winner: " + winner;
  }else if(isfull(squares)){
    
    status="draw"
}else{
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  function handleClick(i) {
    const nextSquares = squares.map(curr=>curr);
    if (squares[i]||calcwin(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setXIsNext(!xIsNext)
    setSquares(nextSquares);
  }
  function isfull(square){
    
    for(let i=0;i<square.length;i++)
    {
      if(square[i]==null||square.length==0){
      return false
      }
      else 
      continue
    }
    return true
  }
  
  return (
    <>
    
    <h1>TIC TAC TOE</h1>
    <h3>{status}</h3>
      <div className="board-row">
        <Square value={squares[0]} handleClick={()=>handleClick(0)} />
        <Square value={squares[1]}  handleClick={()=>handleClick(1)} />
        <Square value={squares[2]}  handleClick={()=>handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]}  handleClick={()=>handleClick(3)} />
        <Square value={squares[4]}  handleClick={()=>handleClick(4)} />
        <Square value={squares[5]}  handleClick={()=>handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]}  handleClick={()=>handleClick(6)}/>
        <Square value={squares[7]}  handleClick={()=>handleClick(7)} />
        <Square value={squares[8]}  handleClick={()=>handleClick(8)} />
      </div>
      <div className="board-row">
        <button onClick={()=>{setSquares(Array(9).fill(null));setXIsNext(true);status="Next player: X"}}>reset</button>
      </div>
    
    </>
  );
}


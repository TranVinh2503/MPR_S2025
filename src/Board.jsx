import { useState } from "react";

function Board() {
  const [board, setBoard] = useState(Array(10).fill(Array(10).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState("V");
  const [message, setMessage] = useState("");
  const checkWin = ()=>{
    //  for row
    // for col
  }
  const handClicked = (row, col) => {
    console.log(row, col);
    const newBoard = board.map((rowArr) => [...rowArr]);
    if (currentPlayer === "V") {
      if (row + 1 < 10 && !newBoard[row][col] && !newBoard[row + 1][col] &&!checkWin()) {
        newBoard[row][col] = "V";
        newBoard[row + 1][col] = "V";
        setBoard(newBoard);
        setCurrentPlayer("H");
        setMessage("");
      } else {
        setMessage("Invalid move to player V");
      }
    }else if(currentPlayer === "H"){
        if (col + 1 < 10 && !newBoard[row][col] && !newBoard[row][col+1] && !checkWin()) {
            newBoard[row][col] = "H";
            newBoard[row][col+1] = "H";
            setBoard(newBoard);
            setCurrentPlayer("V");
            setMessage("");
          } else {
            setMessage("Invalid move to player H");
          }
    }
  };
  return (
    <div className="game-container">
      <h1>Domineering Game</h1>
      <p>
        Current Player:{" "}
        {currentPlayer === "V" ? "Vertical (V)" : "Horizontal (H)"}
      </p>
      <div className="board">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}`}
              className={`cell ${cell}`}
              onClick={() => handClicked(rowIndex, colIndex)}
            >
              {cell}
            </div>
          ))
        )}
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}
export default Board;

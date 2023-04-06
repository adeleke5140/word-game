import { range } from "../../utils"
import React from "react"
import { checkGuess } from "../../game-helpers"

function Cell({ status, letter }) {
  const className = status ? `cell ${status}` : "cell"
  return <span className={className}>{letter}</span>
}

//you don't need to map all the time
//property access is one good way of solving things
function Guess({ value, answer }) {
  const result = checkGuess(value, answer)

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  )
}

export default Guess

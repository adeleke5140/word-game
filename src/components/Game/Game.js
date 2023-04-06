import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import Input from "../Input"
import GuessResult from "../Guesses/Guesses"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { Banner as GameOverBanner } from "../Banner/Banner"
// Pick a random word on every pageload.
// const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guessList, setGuessList] = React.useState([])
  const [tries, setTries] = React.useState(0)
  const [guess, setGuess] = React.useState("")
  const [answer, setAnswer] = React.useState(() => sample(WORDS))

  //state changes must be immutable
  function updateGuessList(guess) {
    setGuess(guess)

    const incrementTries = tries + 1
    setTries(incrementTries)

    const nextGuessList = [...guessList]
    nextGuessList.push({ id: Math.random(), guess })
    setGuessList(nextGuessList)
  }

  function resetGame() {
    setAnswer(() => sample(WORDS))
    setTries(0)
    setGuess("")
    setGuessList([])
  }

  const isDisabled = guess === answer || tries === NUM_OF_GUESSES_ALLOWED

  return (
    <>
      <GuessResult answer={answer} guesses={guessList} />
      <Input updateGuessList={updateGuessList} isDisabled={isDisabled} />
      <GameOverBanner
        guess={guess}
        tries={tries}
        answer={answer}
        reset={resetGame}
      />
    </>
  )
}

export default Game

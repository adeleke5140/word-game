import React from "react"

function Input({ updateGuessList, isDisabled }) {
  const [guess, setGuess] = React.useState("")

  function handleSubmit(e) {
    e.preventDefault()
    updateGuessList(guess)
    setGuess("")
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        type="text"
        id="guess-input"
        value={guess}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        disabled={isDisabled}
      />
    </form>
  )
}

export default Input

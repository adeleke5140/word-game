const HappyBanner = ({ tries, reset }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {tries} {tries === 1 ? "guess" : "guesses"}
        </strong>
        .
        <button className="button" onClick={reset}>
          Restart game
        </button>
      </p>
    </div>
  )
}

export { HappyBanner }

const SadBanner = ({ answer, reset }) => {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button className="button" onClick={reset}>
        Restart game
      </button>
    </div>
  )
}

export { SadBanner }

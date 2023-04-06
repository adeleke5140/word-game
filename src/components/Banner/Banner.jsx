import { HappyBanner } from "./HappyBanner"
import { SadBanner } from "./SadBanner"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

const Banner = ({ guess, answer, tries, reset }) => {
  return (
    <>
      {guess === answer ? <HappyBanner tries={tries} reset={reset} /> : null}

      {tries === NUM_OF_GUESSES_ALLOWED && guess !== answer ? (
        <SadBanner answer={answer} reset={reset} />
      ) : null}
    </>
  )
}

export { Banner }

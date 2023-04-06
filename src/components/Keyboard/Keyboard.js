import React from "react"

const arr1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
const arr2 = ["a", "s", "d", "f", " g", "h", "j", "k", "l"]
const arr3 = ["z", "x", "c", "v", "b", "n", "m"]

function Keyboard() {
  return (
    <div>
      <div>
        {arr1.map((letter) => (
          <span className="cell">{letter}</span>
        ))}
      </div>
      <div>
        {arr2.map((letter) => (
          <span className="cell">{letter}</span>
        ))}
      </div>
      <div>
        {arr3.map((letter) => (
          <span className="cell">{letter}</span>
        ))}
      </div>
    </div>
  )
}

export default Keyboard

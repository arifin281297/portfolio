import React from 'react'

export default function Button ({text}) {
    function handClick() {
        return alert("Test HandClick")
    }
  return (
    <div>
      <button onClick={handClick}>{text}</button>
    </div>
  )
}

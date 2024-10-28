import React from 'react'

interface Button{
 click: string
}

function Button({click}:Button) {
  return (
    <div>
      <div className="button">
        <button>
          {click}
        </button>
      </div>
    </div>
  )
}

export default Button

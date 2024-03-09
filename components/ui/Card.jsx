import React from 'react'

function Card({children, classes}) {
  return (
    <div className={`${classes} rounded-lg shadow`}>{children}</div>
  )
}

export default Card
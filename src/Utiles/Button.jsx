import React from 'react'

function Button({label, className, onClick}) {
  return (
  
    <button className={`btn btn-primary ${className}`} onClick={onClick}>{label}</button>
  )
}

export default Button
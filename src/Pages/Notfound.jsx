import React from 'react'
import notfound from './assets/man-shopping-supermarket/notfound.jpg'

function Notfound() {
  return (
    <div style={{width:"100vw", height:"60vh"}}>
      <img src={notfound} alt="image" style={{width:'100%', height:"100%" , objectFit:"contain"}} />
    </div>
  )
}

export default Notfound
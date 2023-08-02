import React from 'react'
import Cro1 from './assets/man-shopping-supermarket/Crousel1.jpg'
import Cro2 from './assets/man-shopping-supermarket/Crousel2.jpg'
import Cro3 from './assets/man-shopping-supermarket/Crousel3.jpg'


function Crousel() {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" style={{height:'17rem',width:'100%'}}>
      <img src={Cro1} className="d-block w-100"  style={{height:'100%',width:'100%',objectFit:'contain'}} alt="image"/>
    </div>
    <div className="carousel-item" style={{height:'17rem',width:'100%'}}>
      <img src={Cro2} className="d-block w-100" style={{height:'100%',width:'100%',objectFit:'contain'}} alt="image"/>
    </div>
    <div className="carousel-item" style={{height:'17rem',width:'100%'}}>
      <img src={Cro3} className="d-block w-100" style={{height:'100%',width:'100%',objectFit:'contain'}} alt="image"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Crousel
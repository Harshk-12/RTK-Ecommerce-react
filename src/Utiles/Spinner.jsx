import React,{CSSProperties} from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'


function Spinner({isloading,marginleft,margintop}) {


    let override={
            marginLeft:marginleft,
            marginTop:margintop,
            position:'absolute'
    }

  return (
    <PropagateLoader
    color={'orange'}
    loading={isloading}
    cssOverride={override}
    size={30}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  )
}

export default Spinner
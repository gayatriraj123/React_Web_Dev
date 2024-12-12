import React from 'react'

const Card1 = (props) => {
  return (
    <div>
        {/* {props.name} */}
        <input type='text' onChange={(e)=>props.setName(e.target.value)}></input>
        <p>name state variable ki value inside card :{props.name}</p>
    </div>
  )
}

export default Card1
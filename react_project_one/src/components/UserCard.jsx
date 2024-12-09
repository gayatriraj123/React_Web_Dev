import React from 'react'
// import A from '../assets/a.jpg'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-Container'>
        <p id='user-title'>{props.name}</p>
        <img id='user-image' src={props.image} alt={props.image}></img>
        <p id='user-discription'>{props.desc}</p>
    </div>
  )
}

export default UserCard
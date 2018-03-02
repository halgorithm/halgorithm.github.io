import React from 'react'

export const GameCard = ({ title, description, image, extraImages }) => {
  return (
    <div>
      <a href="">
        <img src={image} style={{ width: '100px' }} />
      </a>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}

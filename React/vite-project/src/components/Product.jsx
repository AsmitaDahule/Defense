import React from 'react'

const Product = (props) => {
  return (
    <div>
      <p>I am a {props.name}</p>
      <p>Love from {props.name}</p>
    </div>
  )
}

export default Product

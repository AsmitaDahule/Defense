import React from 'react'

const Product = (props) => {
  return (
    <div>
      <ul>{props.name}'s grocery city-{props.city}'
        {props.item1 && <li>{props.item1}</li>}
        {props.item3 && <li>{props.item3}</li>}
      </ul>
    </div>
  )
}

export default Product

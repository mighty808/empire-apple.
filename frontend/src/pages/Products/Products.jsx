import React, { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Products = () => {

  const [category] = useState("All")


  return (
    <div>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Products

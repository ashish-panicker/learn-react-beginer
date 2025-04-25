import React from 'react'

function Product({ product }) {
  return (
    <div className="card">
      <img
        src={product.image}
        alt="Denim Jeans"
        style={{ width: '100%' }}
      />
      <h1>{product.title}</h1>
      <p className="price">$ {product.price}</p>
      <p>{product.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  )
}

export default Product

import React from 'react'
import Product from './Product'
import axios from 'axios'

const URL = 'https://fakestoreapi.com/products'

function ProductList() {
  const [products, setProducts] = React.useState([])
  const [error, setError] = React.useState(false)

  React.useEffect(function () {
    axios
      .get(URL)
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data)
        }
      })
      .catch((error) => {
        setError(true)
      })
  }, [])

  return (
    <div className="container mx-auto product flex">
      {products.length > 0 &&
        products.map((item) => (
          <Product
            product={item}
            key={item.id}
          />
        ))}
        {products.length === 0 && <h2>Nothing to show.</h2>}
    </div>
  )
}

export default ProductList

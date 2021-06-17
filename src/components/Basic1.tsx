import React, { useState } from 'react'

interface AppName {
  name?: string
}

const Basic1 = () => {
  const [product, setProducts] = useState({ name: '', price: '' })

  return (
    <>
      <form>
        <input
          type="text"
          value={product.name}
          onChange={(evt) =>
            setProducts({ ...product, name: evt.target.value })
          }
        />
        <input
          type="text"
          value={product.price}
          onChange={(evt) =>
            setProducts({ ...product, price: evt.target.value })
          }
        />
      </form>
      <h3>Product name is {product.name} !</h3>
      <h3>Price is {product.price} !</h3>
    </>
  )
}

Basic1.defaultProps = {
  name: 'Hello, defaultProps!',
}

export default Basic1

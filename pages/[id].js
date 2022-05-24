import React from 'react'
import ProductDetails from '../components/ProductDetails'
import Head from 'next/head'

function Product() {
  return (
    <div>
      <Head>
        <title>Product view</title>
        <meta name="description" content="Product Review Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductDetails/>
    </div>
  )
}

export default Product
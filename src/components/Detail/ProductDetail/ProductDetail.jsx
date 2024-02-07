import React from 'react'

const ProductDetail = ({product}) => {
  return (
    <div>
        <h3 className="font-bold text-2xl mb-4">{product.title}</h3>
        <p className="font-extrabold text-2xl">${product.price}</p>
        <p className="font-thin my-4">{product.description}</p>
        <div className="">
            <p className='uppercase'>Quantity : </p>
            <div className="block md:flex gap-2">
                <div className="">
                    <input type="number" min={1} className='rounded' />
                </div>
                <button className='uppercase bg-black text-white px-3 py-2 rounded'>Pre - Order</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail

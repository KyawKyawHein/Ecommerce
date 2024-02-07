import React from 'react'
import "./singleProduct.css"

const SingleProduct = ({image,title,price,description,listView=false,viewThree=false,viewTwo=false}) => {
  return (
    <div className={`product-item border px-2 rounded ${listView && 'flex gap-10 p-2'}`}>
    <div className='relative flex items-center justify-center'>
      <img src={image} className={`w-full ${viewThree && 'md:h-[300px] md:w-[300px]'} ${viewTwo && 'md:h-[340px] md:w-[340px]'} ${listView && 'md:w-[400px] md:h-[200px]'}`} alt="" />
      <button className={`quick-add-btn z-0 absolute left-0 right-0 bg-black  text-white w-full w-full m-auto p-3 rounded hover:bg-orange-500 ${viewThree | viewTwo ?'md:bottom-[-90px]':'md:bottom-[30px] hidden'}`}>Quick Add</button>
    </div>
    <div className='z-20 relative p-3 bg-white'>
      <h4 className="my-3 font-bold">{title}</h4>
      <p className="">${price}</p>
      {
        listView && <p className="my-5">{description}</p>
      }
    </div>
  </div>
  )
}

export default SingleProduct

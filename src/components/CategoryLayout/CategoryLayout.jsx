import React from 'react'
import { ManPhoto, WomanPhoto } from '../../assets'
import "./categoryLayout.css"

export default function CategoryLayout() {
  return (
    <div className='my-3'>
      <div className="block md:flex gap-3">
        <div className="relative category-layout">
            <img src={WomanPhoto} className='layout-img' />
            <div className="absolute bottom-14 left-[40%] text-white">
                <p className="uppercase font-extrabold mb-3">shop women's</p>
                <button className='bg-white font-semibold p-2 md:py-3 md:px-8 text-black'>Shop now</button>
            </div>
        </div>
        <div className="relative category-layout">
            <img src={ManPhoto} className='layout-img' />
            <div className="absolute bottom-14 left-[40%] text-white">
                <p className="uppercase font-extrabold mb-3">shop men's</p>
                <button className='bg-white font-semibold p-2 md:py-3 md:px-8 text-black'>Shop now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

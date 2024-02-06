import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faGripLines, faGripVertical } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import "./showProducts.css"

export default function Products({products}) {
  const [viewThree,setViewThree] = useState(true)
  const [viewTwo,setViewTwo] = useState(false)
  const [listView,setListView] = useState(false)

  const changeLayout = (layout)=>{
    switch (layout) {
      case 'viewThree':
          setViewThree(true)
          setViewTwo(false)
          setListView(false)
        break;
        case 'viewTwo':
          setViewThree(false)
          setViewTwo(true)
          setListView(false)
        break;
        case 'listView':
          setViewThree(false)
          setViewTwo(false)
          setListView(true)
        break;
      default:
        break;
    }
  }
  return (
    <div className='w-full'>
      <div className="flex justify-between items-center">
        <div className="">
          Sort by Featured
        </div>
        <div className=" mb-3 flex gap-3 justify-end">
          <button className={`p-3 ${viewThree?'rounded bg-black text-white':'bg-white text-black'}`} onClick={()=>changeLayout('viewThree')}>
            <FontAwesomeIcon icon={faGrip} />
          </button>
          <button className={`p-3 ${viewTwo?'rounded bg-black text-white':'bg-white text-black'}`} onClick={()=>changeLayout('viewTwo')}>
          <FontAwesomeIcon icon={faGripVertical} />
          </button>
          <button className={`p-3 ${listView?'rounded bg-black text-white':'bg-white text-black'}`} onClick={()=>changeLayout('listView')}>
            <FontAwesomeIcon icon={faGripLines} />
          </button>
        </div>
      </div>
      <motion.div layout initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className={`${viewThree && 'md:grid grid-cols-3'} ${viewTwo && 'md:grid grid-cols-2'} ${listView && 'block'} md:gap-4`}>
          {
            products?.map((product)=>(
              <div className={`product-item border px-2 rounded ${listView && 'flex gap-10 p-2'}`} key={product.id}>
                <div className='relative flex items-center justify-center'>
                  <img src={product.image} className={`w-full ${viewThree && 'md:h-[300px] md:w-[300px]'} ${viewTwo && 'md:h-[340px] md:w-[340px]'} ${listView && 'md:w-[400px] md:h-[200px]'}`} alt="" />
                  <button className={`quick-add-btn z-0 absolute left-0 right-0 bg-black  text-white w-full w-full m-auto p-3 rounded hover:bg-orange-500 ${viewThree | viewTwo ?'md:bottom-[-90px]':'md:bottom-[30px] hidden'}`}>Quick Add</button>
                </div>
                <div className='z-20 relative p-3 bg-white'>
                  <h4 className="my-3 font-bold">{product.title}</h4>
                  <p className="">${product.price}</p>
                  {
                    listView && <p className="my-5">{product.description}</p>
                  }
                </div>
              </div>
            ))
          }
      </motion.div>
    </div>
  )
}

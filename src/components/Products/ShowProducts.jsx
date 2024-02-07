import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faGripLines, faGripVertical } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import SingleProduct from '../SingleProduct/SingleProduct';

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
              <SingleProduct key={product.id} {...product} viewThree={viewThree} viewTwo={viewTwo} listView={listView} />
            ))
          }
      </motion.div>
    </div>
  )
}

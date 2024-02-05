import React from 'react'
import "./linkNavbar.css"

const LinkNavbar = () => {
  return (
    <>
    <ul className='p-5 flex gap-10 justify-center items-center font-semibold text-sm relative border border-b-2'>
        <li className='cursor-pointer home uppercase'>Home</li>
        <li className='cursor-pointer collection-nav'>
          <p className='uppercase'>Collection</p>
          <div className="collection absolute z-30 bg-white bottom-[-220px] w-full left-0 right-0">
            <div className="w-full md:w-[1300px] flex justify-between items-start m-auto p-3 py-5">
            <div className="">
              <h3 className="uppercase font-extrabold text-1xl mb-5">Collection page</h3>
              <ul className='text-gray-500'>
                <li className='my-2'>Collection Left Sidebar</li>
                <li className='my-2'>Collection Right Sidebar</li>
                <li className='my-2'>Collection Top Sidebar</li>
                <li className='my-2'>Collection Without Sidebar</li>
                <li className='my-2'>Collection Deals</li>
              </ul>
            </div>
            <div className="">
              <h3 className="uppercase font-extrabold text-1xl mb-5">Collection page</h3>
              <ul className='text-gray-500'>
                <li className='my-2'>Collection Left Sidebar</li>
                <li className='my-2'>Collection Right Sidebar</li>
                <li className='my-2'>Collection Top Sidebar</li>
                <li className='my-2'>Collection Without Sidebar</li>
                <li className='my-2'>Collection Deals</li>
              </ul>
            </div>
            <div className="">
              <h3 className="uppercase font-extrabold text-1xl mb-5">Collection page</h3>
              <ul className='text-gray-500'>
                <li className='my-2'>Collection Left Sidebar</li>
                <li className='my-2'>Collection Right Sidebar</li>
                <li className='my-2'>Collection Top Sidebar</li>
                <li className='my-2'>Collection Without Sidebar</li>
                <li className='my-2'>Collection Deals</li>
              </ul>
            </div>
            </div>
          </div>
        </li>
        <li className='cursor-pointer products-nav'>
          <p className="uppercase">Products</p>
          <div className="products absolute z-30 bg-white bottom-[-220px] w-full left-0 right-0">
            <div className="w-full md:w-[1300px] flex justify-between items-start m-auto p-3 py-5">
            <div className="">
              <h3 className="uppercase font-extrabold text-1xl mb-5">Collection page</h3>
              <ul className='text-gray-500'>
                <li className='my-2'>Collection Left Sidebar</li>
                <li className='my-2'>Collection Right Sidebar</li>
                <li className='my-2'>Collection Top Sidebar</li>
                <li className='my-2'>Collection Without Sidebar</li>
                <li className='my-2'>Collection Deals</li>
              </ul>
            </div>
            <div className="">
              <h3 className="uppercase font-extrabold text-1xl mb-5">Collection page</h3>
              <ul className='text-gray-500'>
                <li className='my-2'>Collection Left Sidebar</li>
                <li className='my-2'>Collection Right Sidebar</li>
                <li className='my-2'>Collection Top Sidebar</li>
                <li className='my-2'>Collection Without Sidebar</li>
                <li className='my-2'>Collection Deals</li>
              </ul>
            </div>
            <div className="">
              <h3 className="uppercase font-extrabold text-1xl mb-5">Collection page</h3>
              <ul className='text-gray-500'>
                <li className='my-2'>Collection Left Sidebar</li>
                <li className='my-2'>Collection Right Sidebar</li>
                <li className='my-2'>Collection Top Sidebar</li>
                <li className='my-2'>Collection Without Sidebar</li>
                <li className='my-2'>Collection Deals</li>
              </ul>
            </div>
            </div>
          </div>
        </li>
        <li className='cursor-pointer uppercase'>Other Pages</li>
        <li className='cursor-pointer uppercase'>Blog</li>
        <li className='cursor-pointer uppercase'>FAQS</li>
        <li className='cursor-pointer uppercase'>Contact us</li>
    </ul>
    </>
  )
}

export default LinkNavbar

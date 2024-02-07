import React from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { Link } from 'react-router-dom'

const AdminProducts = () => {
  return (
    <DashboardLayout>
        <Link to={'/admin/dashboard/product/add'} className='bg-blue-500 py-3 px-4 rounded text-white hover:bg-blue-700'>Add Product</Link>
        <h1 className='text-3xl mb-2 mt-5 font-bold text-blue-500'>Products</h1>
        <table className="table-fixed w-full border-collapse border border-slate-500">
            <thead>
                <tr>
                <th className='border p-2 border-slate-600'>Song</th>
                <th className='border p-2 border-slate-600'>Artist</th>
                <th className='border p-2 border-slate-600'>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border p-2 border-slate-700'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className='border p-2 border-slate-700'>Malcolm Lockyer</td>
                    <td className='border p-2 border-slate-700'>1961</td>
                </tr>
                <tr>
                    <td className='border p-2 border-slate-700'>Witchy Woman</td>
                    <td className='border p-2 border-slate-700'>The Eagles</td>
                    <td className='border p-2 border-slate-700'>1972</td>
                </tr>
                <tr>
                    <td className='border p-2 border-slate-700'>Shining Star</td>
                    <td className='border p-2 border-slate-700'>Earth, Wind, and Fire</td>
                    <td className='border p-2 border-slate-700'>1975</td>
                </tr>
            </tbody>
            </table>
    </DashboardLayout>
  )
}

export default AdminProducts

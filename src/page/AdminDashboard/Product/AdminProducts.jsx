import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import { Link } from "react-router-dom";
import axiosClient from "../../../axiosClient";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { Loading } from "../../../components";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const getProducts = (page=1) => {
    axiosClient.get(`/products?page=${page}`).then(({ data }) => {
      console.log(data);
      setProducts(data);
    });
  };
  const handlePageChange = (page)=>{
    getProducts(page)
  }
  const deleteProduct = (id) => {
    axiosClient.delete(`/products/${id}`).then(()=>{
        console.log('done')
        getProducts()      
        Toastify({
          text: 'Product is deleted.',
          duration: 3000,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: 'green',
            color: 'white'
          },
        }).showToast()  
    })
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <DashboardLayout>
      <Link
        to={"/admin/dashboard/product/add"}
        className="bg-blue-500 py-3 px-4 rounded text-white hover:bg-blue-700"
      >
        Add Product
      </Link>
      {products.data?.length >= 1 ? (
        <div>
          <h1 className="text-3xl mb-2 mt-5 font-bold text-blue-500">
            Products
          </h1>
          <table className="table-auto w-full border-collapse border border-slate-500">
            <thead>
              <tr>
              <th className="border p-2 border-slate-600">Name</th>
                <th className="border p-2 border-slate-600">Image</th>
                <th className="border p-2 border-slate-600">Description</th>
                <th className="border p-2 border-slate-600">Category</th>
                <th className="border p-2 border-slate-600">Price</th>
                <th className="border p-2 border-slate-600">Control</th>
              </tr>
            </thead>
            <tbody>
              {products.data.map((product) => (
                <tr key={product.id}>
                  <td className="border p-2 border-slate-700">
                    {product.name}
                  </td>
                  <td className="border p-2 border-slate-700">
                    <img
                      src={product.image}
                      className="w-[100px] md:w-[300px] rounded"
                      alt=""
                    />
                  </td>
                  <td className="border p-2 border-slate-700">
                    {product.description}
                  </td>
                  <td className="border p-2 border-slate-700">
                    {product.category}
                  </td>
                  <td className="border p-2 border-slate-700">
                    {product.price}
                  </td>
                  <td className="border p-2 border-slate-700">
                    <div className="flex gap-3">
                      <Link to={`/admin/dashboard/product/${product.slug}`} className="bg-orange-400 md:p-2 hover:bg-orange-600 rounded">
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="bg-red-500 md:p-2 hover:bg-red-600 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination controls */}
          <div className="flex gap-2 items-center my-2">
            <button
              onClick={() => handlePageChange(products.meta.current_page - 1)}
              className={`bg-black p-2 rounded ${products.meta.current_page===1? 'text-gray-500':'text-white'}`}
              disabled={products.meta.current_page === 1}
            >
              Previous
            </button>
            <span>
              Page {products.meta.current_page} of {products.meta.last_page}
            </span>
            <button
              className={`bg-black p-2 rounded ${products.meta.current_page===products.meta.last_page? 'text-gray-500':'text-white'}`}
              onClick={() => handlePageChange(products.meta.current_page + 1)}
              disabled={products.meta.current_page === products.meta.last_page}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <Loading/>
      )}
    </DashboardLayout>
  );
};

export default AdminProducts;

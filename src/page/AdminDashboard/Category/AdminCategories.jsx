import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import { Link } from "react-router-dom";
import axiosClient from "../../../axiosClient";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { Loading } from "../../../components";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = (page = 1) => {
    axiosClient.get(`/categories?page=${page}`).then(({ data }) => {
      console.log(data);
      setCategories(data);
    });
  };
  const handlePageChange = (page) => {
    getCategories(page);
  };
  const deleteCategory = (id) => {
    axiosClient.delete(`/categories/${id}`).then(() => {
      getCategories();
      Toastify({
        text: "Category is deleted.",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "green",
          color: "white",
        },
      }).showToast();
    });
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <DashboardLayout>
      <Link
        to={"/admin/dashboard/category/add"}
        className="bg-blue-500 py-3 px-4 rounded text-white hover:bg-blue-700"
      >
        Add Category
      </Link>
      {categories.data?.length >= 1 ? (
        <div>
          <h1 className="text-3xl mb-2 mt-5 font-bold text-blue-500">
            Products
          </h1>
          <table className="table-fixed rounded border-collapse border border-slate-500">
            <thead>
              <tr>
                <th className="border p-3 border-slate-600">Name</th>
                <th className="border p-3 border-slate-600">Control</th>
              </tr>
            </thead>
            <tbody>
              {categories.data.map((category) => (
                <tr key={category.id}>
                  <td className="border p-3 border-slate-700">
                    {category.name}
                  </td>
                  <td className="border p-3 border-slate-700">
                    <div className="flex gap-3">
                      <Link to={`/admin/dashboard/category/${category.slug}`} className="bg-orange-400 md:p-2 hover:bg-orange-600 rounded">
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteCategory(category.id)}
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
              onClick={() => handlePageChange(categories.meta.current_page - 1)}
              className={`bg-black p-2 rounded ${
                categories.meta.current_page === 1
                  ? "text-gray-500"
                  : "text-white"
              }`}
              disabled={categories.meta.current_page === 1}
            >
              Previous
            </button>
            <span>
              Page {categories.meta.current_page} of {categories.meta.last_page}
            </span>
            <button
              className={`bg-black p-2 rounded ${
                categories.meta.current_page === categories.meta.last_page
                  ? "text-gray-500"
                  : "text-white"
              }`}
              onClick={() => handlePageChange(categories.meta.current_page + 1)}
              disabled={categories.meta.current_page === categories.meta.last_page}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </DashboardLayout>
  );
};

export default AdminCategories;

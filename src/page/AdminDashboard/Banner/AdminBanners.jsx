import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import { Link } from "react-router-dom";
import axiosClient from "../../../axiosClient";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { Loading } from "../../../components";

const AdminBanners = () => {
  const [banners, setBanners] = useState([]);
  const getBanners = () => {
    axiosClient.get(`/banners`).then(({ data }) => {
      console.log(data);
      setBanners(data);
    });
  };
  const deleteBanner = (id) => {
    axiosClient.delete(`/banners/${id}`).then(() => {
      getBanners();
      Toastify({
        text: "Banner is deleted.",
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
    getBanners();
  }, []);
  return (
    <DashboardLayout>
      <Link
        to={"/admin/dashboard/banner/add"}
        className="bg-blue-500 py-3 px-4 rounded text-white hover:bg-blue-700"
      >
        Add Banner
      </Link>
      {banners?.length >= 1 ? (
        <div>
          <h1 className="text-3xl mb-2 mt-5 font-bold text-blue-500">
            Banners
          </h1>
          <table className="table-fixed rounded border-collapse border border-slate-500">
            <thead>
              <tr>
                <th className="border p-3 border-slate-600">Image</th>
                <th className="border p-3 border-slate-600">Control</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner) => (
                <tr key={banner.id}>
                  <td className="border p-3 border-slate-700">
                    <img src={banners.image} alt="" />
                  </td>
                  <td className="border p-3 border-slate-700">
                    <div className="flex gap-3">
                      <Link to={`/admin/dashboard/category/${banner.slug}`} className="bg-orange-400 md:p-2 hover:bg-orange-600 rounded">
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteBanner(banner.id)}
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
        </div>
      ) : (
        <Loading />
      )}
    </DashboardLayout>
  );
};

export default AdminBanners;

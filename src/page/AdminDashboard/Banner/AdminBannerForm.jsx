import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import axiosClient from "../../../axiosClient";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { Loader } from "../../../assets";

const AdminCategoryFom = () => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const nav = useNavigate();
  const [banner, setBanner] = useState();
  const submitBanner = (e) => {
    setSubmitLoading(true);
    e.preventDefault();
    console.log(banner);
    axiosClient.get('/banners').then(({ data }) => {
        console.log(data);
        setSubmitLoading(false);
        Toastify({
          text: "Banner is added.",
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
        nav("/admin/dashboard/banner");
      })
      .catch((err) => {
        if (err.response.status == 422 && err.response.data) {
          setErrors(err.response.data.errors);
        }
        console.log(err);
        setSubmitLoading(false);
      });
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl mb-2 font-bold text-blue-500">Create Banner</h1>
      <form onSubmit={submitBanner} className="flex flex-col gap-4">
        <div className="">
          <div id="fileUpload" className="max-w-md my-2">
            <div className="mb-2 block">
              <Label htmlFor="file" value="Upload file" />
            </div>
            <FileInput
              id="file"
              disabled={submitLoading}
              onChange={(e)=>setBanner(e.target.files[0])}
            />
            {errors?.image && (
              <p className="text-red-500 font-bold">{errors.image[0]}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={submitLoading}
            className="mt-2 md:mt-5"
          >
            {submitLoading ? (
              <>
                <img src={Loader} className="w-[20px]" alt="" />
                Loading
              </>):
              "Update Banner"
            }
          </Button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default AdminCategoryFom;

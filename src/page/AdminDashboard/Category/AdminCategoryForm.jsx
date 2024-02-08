import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import {useNavigate,useParams} from "react-router-dom";
import {
  Button,
  Label,
  TextInput,
} from "flowbite-react";
import axiosClient from "../../../axiosClient";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { Loader } from "../../../assets";

const AdminCategoryFom = () => {
  const {slug} = useParams();
  const [submitLoading,setSubmitLoading] = useState(false);
  const [errors,setErrors] = useState({});
  const nav= useNavigate();
  const [category,setCategory] = useState({name:''})
  const submitCategory = (e)=>{
    setSubmitLoading(true)
    e.preventDefault();
    let res = null
    if(slug){
      res = axiosClient.put(`/categories/${slug}`,category)
    }else{
      res =axiosClient.post('/categories',category)
    }
    res.then(({data})=>{
      console.log(data);
      setSubmitLoading(false)
      Toastify({
        text: slug ? 'Category is updated.':'Category is added.',
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
      nav('/admin/dashboard/category')
    })
    .catch((err)=>{
      if(err.response.status==422  && err.response.data){
        setErrors(err.response.data.errors);
      }
      console.log(err);
      setSubmitLoading(false)
    })
  }
  useEffect(()=>{
    if(slug){
      axiosClient.get(`/categories/${slug}`)
      .then(({data})=>{
        console.log(data);
        setCategory(data)
      })
    }
  },[])

  return (
    <DashboardLayout>
      <h1 className="text-3xl mb-2 font-bold text-blue-500">
        {slug ? "Edit Product" : "Products"}
      </h1>  
      <form onSubmit={submitCategory} className="flex flex-col gap-4">
        <div className="">
          <div className="my-2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Product Name" />
            </div>
            <TextInput
              id="name"
              disabled={submitLoading}
              value={category.name}
              onChange={(e) =>
                setCategory({ name: e.target.value })
              }
              type="text"
            />
            {errors?.name && (
              <p className="text-red-500 font-bold">{errors.name[0]}</p>
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
              </>
            ) : slug ? (
              "Update Category"
            ) : (
              "Add Category"
            )}
          </Button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default AdminCategoryFom;

import React, { useEffect, useState } from "react";
import {useNavigate,useParams} from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import {
  Button,
  FileInput,
  Label,
  TextInput,
  Textarea,
  Select,
} from "flowbite-react";
import axiosClient from "../../../axiosClient";
import { Loading } from "../../../components";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { Loader } from "../../../assets";

const AdminProductForm = () => {
  const {slug} = useParams()
  const [loading, setLoading] = useState(false);
  const [submitLoading,setSubmitLoading] = useState(false);
  const [errors,setErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const nav= useNavigate();
  const [product,setProduct] = useState({name:'',image:'',description:'',stock_quantity:'',price:'',category_id:''})
  const submitProduct = (e)=>{
    setSubmitLoading(true)
    e.preventDefault();
    let res = null
    if(slug){
      res = axiosClient.put(`/products/${slug}`,product)
    }else{
      res =axiosClient.post('/products',product)
    }
    res.then(({data})=>{
      console.log(data);
      setSubmitLoading(false)
      Toastify({
        text: slug ? 'Product is updated.':'Product is added.',
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
      nav('/admin/dashboard/product')
    })
    .catch((err)=>{
      if(err.response.status==422  && err.response.data){
        setErrors(err.response.data.errors);
      }
      console.log(err);
      setSubmitLoading(false)
    })
  }
  // Upload image
  const uploadImg = (e)=>{
    console.log('a');
    const file = e.target.files[0];
    if(!(file instanceof File)){
      return;
    }
    axiosClient.post('/product/upload-photo',{'image':file},{
      headers : {
        'Content-Type' : 'multipart/form-data'
      }
    })
    .then(({data})=>setProduct({...product,image:data.path}))
  }
  useEffect(() => {
    setLoading(true);
    const apiPromise = [
      axiosClient.get('/categories'),
    ];
    if(slug){
      apiPromise.push(axiosClient.get(`/products/${slug}`))
    }
    Promise.all(apiPromise)
    .then(result=>{
      console.log(result);
      const [categories,singleProduct]=result
      //add data
      setCategories(categories.data)
      if(singleProduct){
        console.log(singleProduct);
        setProduct(singleProduct.data)
      }
      //set loading false
      setLoading(false)
    })
    .catch(err=>{
      console.log(err)
      setLoading(false)
    })
  }, []);
  return (
    <DashboardLayout>
      <h1 className="text-3xl mb-2 font-bold text-blue-500">{slug ? "Edit Product":"Products"}</h1>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={submitProduct} className="flex flex-col gap-4">
          <div className="grid md:grid-cols-2 gap-3 w-full">
            <div className="">
              <div className="my-2">
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Product Name" />
                </div>
                <TextInput id="name" disabled={submitLoading} value={product.name} onChange={(e)=>setProduct({...product,name:e.target.value})} type="text" />
                {
                  errors?.name &&
                <p className="text-red-500 font-bold">{errors.name[0]}</p>
                }
              </div>
              {
                product.image &&
                <img src={product.image} alt="image" className="md:w-[200px] my-2 rounded" />
              }
              <div id="fileUpload" className="max-w-md my-2">
                <div className="mb-2 block">
                  <Label htmlFor="file" value="Upload file" />
                </div>
                <FileInput id="file" disabled={submitLoading}  onChange={uploadImg} />
                {
                  errors?.image &&
                <p className="text-red-500 font-bold">{errors.image[0]}</p>
                }
              </div>
              <div className="max-w-md my-2">
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <Textarea
                  id="description"
                  placeholder="Add product description"
                  value={product.description} disabled={submitLoading}  onChange={(e)=>setProduct({...product,description:e.target.value})}
                  rows={4}
                />
                {
                  errors?.description &&
                <p className="text-red-500 font-bold">{errors.description[0]}</p>
                }
              </div>
            </div>
            <div>
              <div>
                <div className="my-2 block">
                  <Label htmlFor="quantity" value="Stock quantity" />
                </div>
                <TextInput id="quantity" disabled={submitLoading}  type="number" value={product.stock_quantity} onChange={(e)=>setProduct({...product,stock_quantity:e.target.value})} />
                {
                  errors?.stock_quantity &&
                <p className="text-red-500 font-bold">{errors.stock_quantity[0]}</p>
                }
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="price" value="Product price" />
                </div>
                <TextInput id="price" disabled={submitLoading}  type="number" value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})} />
                {
                  errors?.price &&
                <p className="text-red-500 font-bold">{errors.price[0]}</p>
                }
              </div>
              <div className="max-w-md my-2">
                <div className="mb-2 block">
                  <Label htmlFor="category" value="Category" />
                </div>
                <Select id="category" value={product.category_id} onChange={(e)=>setProduct({...product,category_id:e.target.value})}>
                  {categories?.length > 0 &&
                    categories.map((category) => (
                      <option value={category.id} disabled={submitLoading} key={category.id}>{category.name}</option>
                    ))}
                </Select>
                {
                  errors?.category_id &&
                <p className="text-red-500 font-bold">{errors.category_id[0]}</p>
                }
              </div>
              <Button type="submit" disabled={submitLoading} className="mt-2 md:mt-5">
                {
                  submitLoading? 
                  <>
                  <img src={Loader} className="w-[20px]" alt="" />
                   Loading
                  </>:
                    slug? 'Update Product':'Add Product'
                }
              </Button>
            </div>
          </div>
        </form>
      )}
    </DashboardLayout>
  );
};

export default AdminProductForm;

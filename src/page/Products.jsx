import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { ShowProducts } from "../components";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  const [womanProducts, setWomanProducts] = useState();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setWomanProducts(data);
    });
  }, []);
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-full md:w-[1300px] md:mt-20 flex gap-4 md:gap-10">
          <div className="categories-list w-full md:w-[400px]">
            <div className=" flex gap-2 items-center">
                <FontAwesomeIcon icon={faBars} />
                <h1 className="font-extrabold text-2xl uppercase">Categories</h1>
            </div>
            <ul className="mt-5">
                <li className="bg-gray-200 p-3 md:px-8 mb-2">Flash Deals</li>
                <li className="bg-gray-200 p-3 md:px-8 mb-2">Women</li>
                <li className="bg-gray-200 p-3 md:px-8 mb-2">Men</li>
            </ul>
          </div>
          <ShowProducts products={womanProducts} />
        </div>
      </div>
    </Layout>
  );
}

import React from "react";

export default function Footer() {
  return (
    <>
    <div className="flex flex-col items-center bg-black mt-5">
      <div className="w-full md:w-[1200px] text-white flex justify-between gap-4 p-2 md:p-10">
        <div className="">
          <p className="uppercase font-extrabold">Contact us</p>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem{" "}
            <br />
            placeat praesentium quidem aliquid consequuntur, quam molestiae
            dolore <br />
            sunt incidunt.
          </p>
          <div className="flex gap-2 my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <p className="">We're available by phone +123-456-789</p>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            hhein6223@gmail.com
          </div>
        </div>
        <div className="">
          <p className="uppercase mb-5 font-extrabold">Help & Support</p>
          <ul>
            <li className="my-2">Help & Center</li>
            <li className="my-2">Shipping info</li>
            <li className="my-2">Returns</li>
            <li className="my-2">How to Order</li>
            <li className="my-2">How to Track</li>
            <li className="my-2">Size Guide</li>
          </ul>
        </div>
        <div className="">
          <p className="uppercase mb-5 font-extrabold">Company info</p>
          <ul>
            <li className="my-2">About Us</li>
            <li className="my-2">Our Blog</li>
            <li className="my-2">Careers</li>
            <li className="my-2">Store Locations</li>
            <li className="my-2">Testimonial</li>
            <li className="my-2">Sitemap</li>
          </ul>
        </div>
      </div>
        <p className="text-center text-white my-5">Copyright 2023. All rights reserved.</p>
    </div>
    </>
  );
}

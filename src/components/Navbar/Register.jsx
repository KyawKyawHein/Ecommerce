import React from "react";
import { useState } from "react";
import { Button, Label, TextInput, Modal } from "flowbite-react";
import { motion } from "framer-motion"

const Register = () => {
  const [openModal, setOpenModal] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <div className="bg-gray-300 p-2 flex gap-4">
            <button
              className={`${
                !register && "bg-white"
              } px-6 py-1 border-none outline-none text-sm select-none `}
              onClick={() => setRegister(false)}
            >
              Login
            </button>
            <button
              className={`${
                register && "bg-white"
              } px-6 py-1 border-none outline-none text-sm select-none `}
              onClick={() => setRegister(true)}
            >
              Register
            </button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <motion.div layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={{ duration: 0.4 }}          
           className="space-y-6">
            {register ? (
              <div>
                <p className="">Create your account </p>
                <form className="flex max-w-md flex-col gap-4">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="Your name" />
                    </div>
                    <TextInput
                      id="name"
                      type="email"                      //   required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput
                      id="email1"
                      type="email"
                      placeholder="example@gmail.com"
                      //   required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                  </div>
                  <Button type="submit">Register</Button>
                </form>
              </div>
            ) : (
              <div>
                <p className="">Insert your account information : </p>
                <form className="flex max-w-md flex-col gap-4">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput
                      id="email1"
                      type="email"
                      placeholder="example@gmail.com"
                      //   required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                  </div>
                  <Button type="submit">Login</Button>
                </form>
              </div>
            )}
          </motion.div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Register;

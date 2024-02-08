import React from 'react'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const ToastifyAlert = () => {
  return (
  Toastify({
    text: 'aa',
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: 'red',
    },
  }).showToast()
  )
}

export default ToastifyAlert

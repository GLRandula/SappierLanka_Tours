import React from 'react'
import { IoLogoWhatsapp } from "../assets/icons/vander";

export default function Whatsapp() {
  return (
    <>
    <div
      className="fixed bottom-5 left-5 text-transparent items-end"
      style={{ zIndex: 1000 }}
    >
    <a href='https://wa.me/+94776102001'>
      <div className="size-16 bg-green-500/5 text-green-500 rounded-xl text-4xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
        <IoLogoWhatsapp />
      </div>
      </a>
    </div>
    </>
  );
}

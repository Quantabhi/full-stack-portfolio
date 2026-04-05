import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full  py-10 scroll-mt-20 ">
      <h2 className="text-center text-5xl"> Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        {" "}
        I have love to hear from you , if you have any question,comments or
        feedback please use the form below
      </p>

      <form className="max-w-2xl  mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-1  outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:border-blue-600 "
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-1 outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:border-blue-600 "
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-2 outline-none border-[0.5px] border-gray-400 rounded-md
                   bg-white mb-6 focus:border-blue-600 "
        ></textarea>
        <button
          type="submit"
          className="py-2 px-6 text-sm sm:text-base w-full sm:w-max flex items-center justify-center gap-2
    bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        {/* <p className='mt-4'>sending...</p> */}
      </form>
    </div>
  );
};

export default Contact;

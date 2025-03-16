import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Header from "../dashboard/_components/Header";
import Footer from "../dashboard/_components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <div
        className="h-screen w-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(238,231,248,1) 0%, rgba(239,239,239,1) 50%, rgba(238,231,248,1) 100%)",
        }}
      >
        <div className="flex justify-center items-center">
          <div className="w-[30%] mt-20">
            <article className="group">
              <img
                alt=""
                src="/me1.png"
                className="h-52 px-32 rounded-xl object-cover transition"
              />

              <div className="p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    About Me
                  </h3>
                </a>

                <p className="mt-2 text-justify text-sm/relaxed text-gray-700 font-semibold">
                Hello!!, I'm Chetan Sharma, a passionate Web Developer with a strong foundation in TailwindCSS, NodeJS, MongoDB, React and SQL. I specialize in creating dynamic, responsive, and user-friendly web applications that deliver seamless experiences. With expertise in both frontend and backend development, I build websites and applications that are not only visually appealing but also efficient and scalable.
                </p>
                <div className="my-5 flex gap-3 items-center">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/chetansharmagya"
                    className="cursor-pointer hover:bg-pink-500 hover:text-white p-1 rounded-lg"
                  >
                    <FaInstagram style={{ fontSize: "25px" }} />
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/Chetan309"
                    className="cursor-pointer hover:bg-slate-900 hover:text-white p-1 rounded-lg"
                  >
                    <FiGithub style={{ fontSize: "25px" }} />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/chetansharma30"
                    className="cursor-pointer hover:bg-blue-600 hover:text-white p-1 rounded-lg"
                  >
                    <FaLinkedinIn style={{ fontSize: "25px" }} />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { BsSendFill } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import Sent from "./Sent";

import { useGlobalContext } from "../hooks/AppContext";

const ContactUs = () => {
  const { modalOpen, setModalOpen } = useGlobalContext();

  /* trying validator */
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  /* try validator pa din */
  const handleEmail = (email) => {
    setEmail(email);
  };

  const handleSubject = (subject) => {
    setSubject(subject);
  };

  const handleMessage = (message) => {
    setMessage(message);
  };

  /* may mali pa */
  const handleSubmitVerifier = () => {
    if (
      email.trim().length !== 0 &&
      subject.trim().length !== 0 &&
      message.trim().length !== 0
    ) {
      setModalOpen(!modalOpen);
      setEmail("");
      setMessage("");
      setSubject("");
    } else {
      return;
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ibqjal",
        "template_i6ltqtt",
        form.current,
        "9eRjD-Mdx6d9GJZDk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="md:px-20 lg:px-40 h-[55rem] mt-10">
      <Sent />
      <h3 className="text-3xl text-black dark:text-white">Contact Details</h3>
      <div className=" my-10 xl:my-10 xl:mx-10 shadow-lg rounded-lg grid grid-cols-1 xl:grid-cols-2 dark:border border-white">
        <div className="p-10">
          <h3 className="text-2xl dark:text-white transition ease-linear delay-150 font-bold">
            Send me a message
          </h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="py-4">
              <label className="block text-xl dark:text-white transition ease-linear delay-150">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                className=" border border-black w-full p-2 rounded-md "
                autoComplete="off"
              />
            </div>

            <div className="pb-4">
              <label className="block text-xl dark:text-white transition ease-linear delay-150">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="user_email"
                className=" border border-black w-full p-2 rounded-md"
                onChange={(e) => {
                  handleEmail(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>
            <div className="pb-4">
              <label className="block text-xl dark:text-white transition ease-linear delay-150">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                className=" border border-black w-full p-2 rounded-md"
                onChange={(e) => {
                  handleSubject(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>
            <div className="pb-4">
              <label className="block text-xl dark:text-white transition ease-linear delay-150">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                className=" border border-black w-full p-2 rounded-md resize-none"
                rows={10}
                onChange={(e) => {
                  handleMessage(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>

            <div className="pt-4 flex justify-center items-center">
              <button
                type="submit"
                className="p-2 px-6  rounded-md text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-gradient-to-l hover:text-pink-500 transition ease-linear delay-150"
                onClick={() => handleSubmitVerifier()}
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-gradient-to-l p-10 hidden xl:block lg:rounded-r-md">
          <h3 className="text-3xl text-white font-bold">Other Contact info</h3>
          <div className="py-4 sm:py-8 flex flex-col justify-center h-5/6">
            <div className="py-6 text-xl lg:text-2xl flex flex-col xl:flex-row items-center">
              <div className="bg-white rounded-full p-3">
                <HiLocationMarker size={35} height={35} />
              </div>
              <p className="ml-4 text-white">
                <span className="font-bold">Residing at : </span>
                Malolos,Bulacan
              </p>
            </div>
            <div className="py-6 text-xl lg:text-2xl flex flex-col xl:flex-row items-center">
              <div className="bg-white rounded-full p-3">
                <HiPhone size={35} />
              </div>

              <p className="ml-4 text-white">
                <span className="font-bold">Mobile no : </span> +639554374797
              </p>
            </div>

            <div className="py-6  text-xl lg:text-2xl flex flex-col xl:flex-row items-center ">
              <div className="bg-white rounded-full p-3">
                <BsSendFill size={35} />
              </div>

              <p className="ml-4 text-white">
                <span className="font-bold">Email : </span>
                alcoriza.emmanuel@gmail.com
              </p>
            </div>

            <div className=" py-6 text-xl lg:text-2xl flex flex-col xl:flex-row items-center ">
              <div className="bg-white rounded-full p-3">
                <AiFillFacebook size={35} />
              </div>

              <a
                href="https://www.facebook.com/emmanuel.alcoriza"
                className="ml-4 text-white"
              >
                <span className="font-bold">Facebook : </span>
                <span className="hover:underline transition ease-in-out delay-500">
                  Emmanuel Alcoriza
                </span>
              </a>
            </div>

            <div className=" py-6 text-xl lg:text-2xl flex flex-col xl:flex-row items-center ">
              <div className="bg-white rounded-full p-3">
                <AiFillLinkedin size={35} />
              </div>

              <a
                href="https://www.linkedin.com/in/emmanuel-alcoriza-4765b2184/"
                className="ml-4 text-white"
              >
                <span className="font-bold">LinkedIn : </span>
                <span className="hover:underline transition ease-in-out delay-500">
                  Emmanuel Alcoriza
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

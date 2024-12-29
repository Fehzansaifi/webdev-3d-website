"use client"
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')

  const text = "Say Hello"

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY,)
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset()
          setMessage('')
          setEmail('')
        },
        (error) => {
          setError(true);
        },
      );
  }

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-2xl md:text-6xl lg:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.1, }}
              >
                {letter}
              </motion.span>
            ))}
            &#128522;
          </div>
        </div>

        {/* form container */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl md:text-xl flex flex-col gap-4 md:gap-8 justify-center mb-8 p-12 md:p-24"
        >
          <span className="text-base md:text-xl">Dear Web dev</span>
          <textarea
            rows={2}
            name="user_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='bg-transparent border-b-2 border-b-black outline-none resize-none'
          />

          <span className="text-base md:text-xl">My mail address is:</span>
          <input
            name='user_email'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-transparent border-b-2 border-b-black outline-none'
          />
          <span className="text-base md:text-xl">Regards</span>

          <button 
            disabled={!message || !email}
            className={`rounded font-semibold text-gray-600 p-2 md:p-4 ${!message || !email ? 'bg-gray-200 cursor-not-allowed' : 'bg-pink-200'}`}
          >
            Send
          </button>
          {success && <span className='text-green-600 font-semibold'>Your message has been sent successfully!</span>}
          {error && <span className='text-red-600 font-semibold'>Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
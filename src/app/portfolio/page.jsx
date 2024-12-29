"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const items = [
  {
    id: 1,
    color: "from-red-400 to-blue-400",
    title: "Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis excepturi exercitationem blanditiis illo aperiam necessitatibus.",
    img: "/blog.png",
    link: ""
  },
  {
    id: 2,
    color: "from-pink-400 to-gray-400",
    title: "PassOP",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis excepturi exercitationem blanditiis illo aperiam necessitatibus.",
    img: "/passop.png",
    link: ""
  },
  {
    id: 3,
    color: "from-green-400 to-purple-400",
    title: "PizzaHub",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis excepturi exercitationem blanditiis illo aperiam necessitatibus.",
    img: "/restaurent.png",
    link: ""
  },
  {
    id: 4,
    color: "from-yellow-400 to-red-400",
    title: "E-Commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis excepturi exercitationem blanditiis illo aperiam necessitatibus.",
    img: "/e-commerce.jpg",
    link: ""
  },
]

const Portfolio = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl md:text-8xl text-center">My Works</div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-blue-300' />

            {items.map(item => (
              <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-semibold md:text-4xl lg:text-6xl xl:text-7xl">{item.title}</h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[550px] xl:h-[320px]">
                    <Image src={item.img} alt='' fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[550px]">{item.desc}</p>
                  <Link href={item.link} className='flex justify-end'>
                  <button className="p-2 text-sm md:p-3 md:text-md lg:p-3 lg:text-lg rounded-md bg-white text-black hover:text-white hover:ring-1 hover:ring-red hover:bg-transparent">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* hire me container */}
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-3xl md:text-7xl">Do you have project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[400px] md:h-[400px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact" className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'>Hire Me</Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio

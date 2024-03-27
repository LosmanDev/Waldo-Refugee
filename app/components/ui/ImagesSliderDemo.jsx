'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { ImagesSlider } from './images-slider';
import Link from 'next/link';

export function ImagesSliderDemo() {
  const images = [
    '/assets/images/1.jpg',
    '/assets/images/2.jpg',
    '/assets/images/3.jpg',
    '/assets/images/4.jpg',
    '/assets/images/5.jpg',
    '/assets/images/6.jpg',
  ];
  return (
    <ImagesSlider className="h-[40rem] p-10 animate-fadeIn" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center rounded"
      >
        <motion.p className="font-medium text-2xl lg:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-50 to-white py-4">
          {/* <span dir="rtl" lang="ar" className="mb-10 block font-bold text-5xl">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </span>

          <span className="mb-10 block ">
            All the Praises and Thanks be to Allah
          </span>
          <span className="mb-10 block">We Welcome You at</span>

          <span className="mt-10 block">105 Ferry Street Malden, MA 02148</span> */}
        </motion.p>
        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <Link href="/directions">
            <span>Directions →</span>
          </Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}

        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-rose-300/10 border-y-rose-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <Link
            target="_blank"
            href="https://www.islamicfinder.org/ramadan-calendar/4930956/boston-ramadan-calendar/"
          >
            <span>Ramadan &apos;24 Calendar →</span>
          </Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-red-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
  );
}

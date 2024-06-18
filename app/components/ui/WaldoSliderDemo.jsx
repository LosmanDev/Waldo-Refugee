'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { WaldoSlider } from './waldo-slider';

export function WaldoSliderDemo() {
  const images = [
    '/assets/images/h-1.jpg',
    '/assets/images/h-2.webp',
    '/assets/images/h-3.webp',
    '/assets/images/h-4.webp',
    '/assets/images/v-1.jpg',
    '/assets/images/v-2.jpg',
    '/assets/images/v-3.jpg',
    '/assets/images/v-4.jpg',
    '/assets/images/v-5.jpg',
    '/assets/images/v-6.jpg',
    '/assets/images/h-6.webp',
    '/assets/images/h-7.webp',
    '/assets/images/h-8.webp',
    '/assets/images/h-9.webp',
    '/assets/images/h-10.webp',
    '/assets/images/h-11.webp',
    '/assets/images/h-12.webp',
    '/assets/images/h-13.webp',
    '/assets/images/h-14.webp',
    '/assets/images/h-15.webp',
    '/assets/images/h-16.webp',
    '/assets/images/h-17.webp',
    '/assets/images/h-18.webp',
  ];
  return (
    <WaldoSlider
      className="md:h-[40rem] h-[25rem] p-10 animate-fadeIn"
      images={images}
    >
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
        <motion.p className="font-medium text-2xl lg:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-50 to-white py-4"></motion.p>
      </motion.div>
    </WaldoSlider>
  );
}

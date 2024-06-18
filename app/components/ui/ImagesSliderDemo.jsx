'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { ImagesSlider } from './images-slider';

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
    <ImagesSlider
      className="lg:h-[30rem] h-[25rem] p-10 animate-fadeIn"
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
    </ImagesSlider>
  );
}

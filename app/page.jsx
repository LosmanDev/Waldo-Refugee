'use client';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import Landing from './components/Landing';
import About from './components/About';

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <Landing />
        <About />
      </main>
    </NextUIProvider>
  );
}

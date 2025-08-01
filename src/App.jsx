import React from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ScrollTrigger , SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger , SplitText);

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='h-dvh bg-black'></div>
    </main>
  )
}

export default App

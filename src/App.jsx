import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger , SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger , SplitText);

const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
      <div className='text-3xl text-indigo-400'>App</div>
    </div>
  )
}

export default App

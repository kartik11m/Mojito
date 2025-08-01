import React , {useRef} from 'react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'

const Hero = () => {

    const videoRef = useRef();
    const isMobile = useMediaQuery({maxWidth : 767})

    useGSAP(() =>{
        const heroSplit = new SplitText('.title' , {type: 'chars , words'}); // for animating the title with chars by chars , words by words
        const paragraphSplit = new SplitText('.subtitle' , {type : 'lines'}); // for animating the subtitle line by line
        heroSplit.chars.forEach((char) => char.classList.add('text-gradient')) // Apply text-gradient class once before animating

        gsap.from(heroSplit.chars , {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })

        gsap.from(paragraphSplit.lines , {
            opacity:0,
            yPercent: 100,
            duration:1.8,
            ease:'expo.out',
            stagger:0.06,
            delay: 1,
        })

        gsap.timeline({
        scrollTrigger:{
            trigger:'#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            // The scrub property is a powerful option available in the scrollTrigger object of GSAP's 
            // animation library. When set to true, it enables a scrubbing effect on the animation, 
            // which means that as the user scrolls up and down the page, the animation will play in reverse or forward, respectively
        }
    })

    .to('.right-leaf', {y:200} , 0)
    .to('.left-leaf',{y: -200} , 0)

    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';

    // video animation timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: 'video',
            start: startValue,
            end: endValue,
            scrub:true,
            pin: true,
            // it will stuck the video when you scroll
            // onEnter: () => videoRef.current.play(),
            // onEnterBack : () => videoRef.current.play(),
            // onLeave: () => videoRef.current.pause(),
            // onLeaveBack: () => videoRef.current.pause,
        }
    })

    videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
    }

    },[])

  return (
    <>
        <section id='hero' className="noisy">
            <h1 className='title'>MOJITO</h1>

            <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf"/>
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf"/>
            <div className='body'>
                <div className="content">
                    <div className="space-y-5 hidden md:block"></div>
                    <p>Cool. Crisp. Classic.</p>
                    <p className='subtitle'>
                        Sip the Spirit <br /> of Summer
                    </p>
                    <div className='view-cocktails'>
                        <p className="subtitle">
                            Every cocktail on our menu is a blend of premium ingredients, 
                            creative flair, and timeless recipes — designed to delight your senses. 
                        </p>
                        <a href="#cocktails">View Cocktails</a>
                    </div>
                </div>
            </div>
        </section>

        <div className="video absolute inset-0">
            <video
            ref={videoRef}
             muted 
             playsInline 
             preload='auto'
             src="/videos/output.mp4" 
            //  autoPlay
            // loop
             >
             </video>
        </div>
    </>
  )
}

export default Hero
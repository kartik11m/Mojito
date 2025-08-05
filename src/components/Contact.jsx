import React from 'react'
import { openingHours, socials } from '../../constants'

const Contact = () => {
  return (
    <footer id='contact'>
        <img src="/images/footer-right-leaf.png" alt="right-leaf" id='f-right-leaf'/>
        <img src="/images/footer-left-leaf.png" alt="left-leaf" id='f-left-leaf'/>

        <div className='content'>
            <h2>Where to Find Us</h2>

            <div>
                <h3>Visit Our Bar</h3>
                <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
            </div>

            <div>
                <h3>Contact Us</h3>
                <p>(555) 987-6543</p>
                <p>hello@jsmcocktail.com</p>
            </div>

            <div>
                <h3>Open Every Day</h3>
                {openingHours.map((time) => (
                    <p key={time.day}>
                    {time.day} : {time.time}
                    </p>
                ))}
		    </div>

            <div>
                <h3>Socials</h3>
                <div className="flex-center gap-5">
                    {socials.map((social) =>(
                        <a 
                        key={social.name}
                        href={social.url}
                        target='...blank'
                        rel='noopener noreferrer'
                        aria-label={social.name}
                        >
                            <img src={social.icon} alt="" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Contact
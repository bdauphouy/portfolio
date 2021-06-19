import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useState } from 'react'

const useGSAP = animate => {
  gsap.registerPlugin(ScrollTrigger)

  const markers = false

  const [textAppear] = useState({
    duration: 2,
    opacity: 0,
    y: '100%',
    ease: 'power4.out',
    stagger: 0.1,
  })

  useEffect(() => {
    const gsapTextElements = document.querySelectorAll('[data-gsap-text]')
    gsapTextElements.forEach(element => {
      const wrapper = document.createElement('span')
      wrapper.style.overflow = 'hidden'
      element.parentNode.insertBefore(wrapper, element)
      wrapper.appendChild(element)
    })
  }, [])

  useEffect(() => {
    if (!animate) {
      const fixedTL = gsap.timeline()
      fixedTL.from('[data-fixed-element]', {
        duration: 0.7,
        ease: 'power2.in',
        opacity: 0,
        stagger: 0.2,
      })

      const navTL = gsap.timeline({
        scrollTrigger: {
          trigger: '#nav',
          markers,
          start: 'top center',
        },
      })
      navTL.from('[data-nav-text]', textAppear)

      const homeTL = gsap.timeline({
        scrollTrigger: {
          trigger: '#home',
          markers,
          start: 'top center',
        },
      })
      homeTL.from('[data-home-text]', textAppear).from(
        '[data-home-thumbnail]',
        {
          duration: 1,
          opacity: 0,
          ease: 'power2.in',
          stagger: 0.2,
        },
        '-=1.5',
      )

      const aboutTL = gsap.timeline({
        scrollTrigger: {
          trigger: '#about',
          markers,
          start: 'top 75%',
        },
      })
      aboutTL.from('[data-about-text]', textAppear)
      aboutTL.from(
        '[data-about-link]',
        {
          duration: 1.5,
          opacity: 0,
          x: -50,
          ease: 'power4.out',
        },
        '-=2.5',
      )

      const useTL = gsap.timeline({
        scrollTrigger: {
          trigger: '#use',
          markers,
          start: 'top center',
        },
      })
      useTL.from('[data-use-text]', textAppear)

      const contactTL = gsap.timeline({
        scrollTrigger: {
          trigger: '#contact',
          markers,
          start: 'top center',
        },
      })
      contactTL.from('[data-contact-border]', {
        duration: 1.5,
        opacity: 0,
        ease: 'power2.in',
      })
      contactTL.from('[data-contact-text]', textAppear, '-=1.5')
    }
  }, [animate, textAppear, markers])
}

export default useGSAP

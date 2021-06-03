import gsap, { Power2 } from 'gsap'

const appearLeft = elements => {
  Array.isArray(elements)
    ? elements.forEach(element => {
        gsap.fromTo(
          element,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: Power2.easeOut },
        )
      })
    : gsap.fromTo(
        elements,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: Power2.easeOut },
      )
}

export { appearLeft }

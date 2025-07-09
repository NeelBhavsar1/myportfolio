import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  smooth: true,
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
})

const animate = (time) => {
  lenis.raf(time)
  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)

export default lenis

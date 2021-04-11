import LocomotiveScroll from 'locomotive-scroll'

export default function setupScroll(){
  return new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.07,
    smartphone: {
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      lerp: 0,
    },
    tablet: {
      smooth: true, 
      direction: 'vertical',
      gestureDirection: 'vertical',
    },
  })
}
export default {
  mounted(el, binding) {
    const options = {
      threshold: 0.2,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('show')
        }
      })
    }, options)

    el.classList.add('before-enter')
    observer.observe(el)
  }
}
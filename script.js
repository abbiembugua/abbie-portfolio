document.documentElement.classList.add('js')

const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.navigation')

menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open')
  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation')
})

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open')
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation')
  })
})

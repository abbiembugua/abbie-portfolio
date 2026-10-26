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

const skillReelWord = document.querySelector('#skill-reel-word')
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const skillReel = ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'React', 'Django REST', 'FastAPI', 'PostgreSQL', 'Java']

if (skillReelWord && !reduceMotion.matches) {
  let skillIndex = 0
  window.setInterval(() => {
    if (document.hidden) return
    skillReelWord.classList.add('is-changing')
    window.setTimeout(() => {
      skillIndex = (skillIndex + 1) % skillReel.length
      skillReelWord.textContent = skillReel[skillIndex]
      skillReelWord.classList.remove('is-changing')
    }, 180)
  }, 2200)
}
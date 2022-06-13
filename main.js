window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a secao passou da linda
  //quais dados vou precisar?

  // o topo da seçao
  const sectionTop = section.offsetTop

  // a altura da seçao
  const sectionHeight = section.offsetHeight

  // o topo da seçao chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = (targetLine >= sectionTop)

  // informacoes dos dados e da lógica
  console.log(
    'O topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetline
  )

  // a seçao termina onde ?
  const sectionEndsAt = (sectionTop + sectionHeight)

  //o final da seçao passou da linha alvo
  const sectionEndPassedTargetline = (sectionEndsAt <= targetLine)

  console.log('O fundo da seçao passou da linha?', sectionEndPassedTargetline)

  // limites da seçao
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #service,
  #services header,
  #services .cards,
  #about,
  #about header,
  #about .content`)

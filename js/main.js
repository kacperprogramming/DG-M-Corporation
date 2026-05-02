const burgerIcon = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__links-mobile')
const navMobileLinks = document.querySelectorAll('.nav__link-mobile')

const handleMobileNav = () => {
    burgerIcon.classList.toggle('is-active')
    navMobile.classList.toggle('nav-active')
}

burgerIcon.addEventListener('click', handleMobileNav)
navMobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerIcon.classList.remove('is-active')
        navMobile.classList.remove('nav-active')
    })
})
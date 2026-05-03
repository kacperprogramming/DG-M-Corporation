const burgerIcon = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__links-mobile')
const navMobileLinks = document.querySelectorAll('.nav__link-mobile')
const footerText = document.querySelector('.footer__bottom-text')

const handleMobileNav = () => {
    burgerIcon.classList.toggle('is-active')
    navMobile.classList.toggle('nav-active')
}

const handleFooterYear = () => {
    const now = new Date().getFullYear()

    footerText.innerHTML = `&copy; ${now} Tropical Paradise`
}

burgerIcon.addEventListener('click', handleMobileNav)
navMobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerIcon.classList.remove('is-active')
        navMobile.classList.remove('nav-active')
    })
})

handleFooterYear()
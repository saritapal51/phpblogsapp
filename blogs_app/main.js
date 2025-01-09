const navitems = document.querySelector('.nav__items') // Corrected the query selector to target class
const openNavBtn = document.querySelector('#open__nav-btn')
const closeNavBtn = document.querySelector('#close__nav-btn')

// Open nav drop down
const openNav = () => {
  navitems.style.display = 'flex' // Show the nav items
  openNavBtn.style.display = 'none' // Hide the open button
  closeNavBtn.style.display = 'inline-block' // Show the close button
}

// Close nav drop down
const closeNav = () => {
  navitems.style.display = 'none' // Hide the nav items
  openNavBtn.style.display = 'inline-block' // Show the open button
  closeNavBtn.style.display = 'none' // Hide the close button
}

openNavBtn.addEventListener('click', openNav)
closeNavBtn.addEventListener('click', closeNav)

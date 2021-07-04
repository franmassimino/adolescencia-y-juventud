const burger = document.getElementById('burger')
const navigation = document.getElementById('mobile-menu')
const cerrarMenu = document.getElementById("cerrar")
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.add('closed')
    navigation.classList.add('active')
    body.classList.add('active')
})

cerrarMenu.addEventListener('click', () => {
    navigation.classList.remove("active")
    burger.classList.remove('closed')
    body.classList.remove('active')
  })
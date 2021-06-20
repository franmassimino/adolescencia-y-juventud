const burger = document.getElementById('burger')
const navigation = document.getElementById('mobile-menu')
const cerrarMenu = document.getElementById("cerrar")

burger.addEventListener('click', () => {
    burger.classList.add('closed')
    navigation.classList.add('active')
})

cerrarMenu.addEventListener('click', () => {
    navigation.classList.remove("active")
    burger.classList.remove('closed')
  })
const show = document.getElementById('show')
const hide = document.getElementById('hide')
const content = document.getElementById('hidden')

show.addEventListener('click', (e) => {
    e.preventDefault()
    content.classList.toggle('active')
    show.classList.add('hidden')
    hide.classList.remove('hidden')
})

hide.addEventListener('click', (e) => {
    e.preventDefault()
    content.classList.toggle('active')
    hide.classList.add('hidden')
    show.classList.remove('hidden')
})
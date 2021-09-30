const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const mensaje = document.getElementById('mensaje')
const form = document.getElementById('form')

form.addEventListener('submit', inputValidation) 

function inputValidation(e){
    e.preventDefault()
    checkInputs()
    if (nombre.classList == 'success' && email.classList == 'success' && mensaje.classList == 'success'){
        handleSubmit()
        nombre.classList.remove('success')
        email.classList.remove('success')
        mensaje.classList.remove('success')
    } else {
        return
    }
}

function checkInputs(){
  const nombreValue = nombre.value.trim();
  const emailValue = email.value.trim();
  const mensajeValue = mensaje.value.trim();
  
  if (nombreValue === ''){
    setErrorFor(nombre);
  } else{
    setSuccesFor(nombre)
  }
  
  if (emailValue === ''){
    setErrorFor(email);
  } else{
    setSuccesFor(email)
  }
  
  if (mensajeValue === ''){
    setErrorFor(mensaje);
  } else{
    setSuccesFor(mensaje)
  }
  
}

function setErrorFor(input) {
  input.classList.add('error')
  input.classList.remove('success')
}

function setSuccesFor(input) {
  input.classList.add('success')
  input.classList.remove('error')
}

async function handleSubmit(){
  const formData = new FormData(form)
  const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
       'Accept': 'aplication/json'
       }
  })
  if (response.ok){
      form.reset()
      alert('Tu mail ha sido enviado :)')
  } else {
      alert('Algo salió mal')
  }
}
  
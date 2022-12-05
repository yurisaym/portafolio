const nome = document.getElementById("nome")
const email = document.getElementById("email")
const mensagem = document.getElementById("mensagem")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings") 

form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings = ""
  let regexEmail = /^\w+([\.-]?\w=)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(nome.value.length < 5){
    warnings += 'o nome não é valido <br>'  
  }
  console.log(regexEmail.test(email.value))
  if(!regexEmail.test(email.value)){
    warnings += 'o email não é valido <br>'

  }
})


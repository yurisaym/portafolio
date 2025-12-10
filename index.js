const navToggle = document.getElementById('navToggle')
const navList = document.querySelector('.nav-list')

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open')

    // Actualizar aria-expanded para accesibilidad
    const expanded = navToggle.getAttribute('aria-expanded') === 'true'
    navToggle.setAttribute('aria-expanded', !expanded)
  })
}

const form = document.querySelector('.contact-form')

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const nome = document.getElementById('nome').value.trim()
    const email = document.getElementById('email').value.trim()
    const mensagem = document.getElementById('mensagem').value.trim()

    let errors = []

    if (nome.length < 3) {
      errors.push('O nome precisa ter pelo menos 3 caracteres.')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      errors.push('O email não é válido.')
    }

    if (mensagem.length < 10) {
      errors.push('A mensagem precisa ter pelo menos 10 caracteres.')
    }

    if (errors.length > 0) {
      alert(errors.join('\n'))
      return
    }

    alert('Mensagem enviada com sucesso! Obrigada.')
    form.reset()
  })
}

const yearSpan = document.getElementById('year')
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear()
}

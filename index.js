let email = document.getElementById('email-input')
let label = document.getElementById('email-error-label')

email.oninvalid = () => {
    email.classList.add('input-error')
    label.style.display = 'block'
}

email.oninput = () => {
    email.classList.remove('input-error')
    label.style.display = 'none'
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwdknq8s26ZrNrl-mhKABUma5kqORHisPBh-CCe_NgRoRKRrjtXXCPC_f8XL8LCXwUa/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')




form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank you for subscribing (Merci de votre abonnement !)"
            setTimeout(function () { msg.innerHTML = "" }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
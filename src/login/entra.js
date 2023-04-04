async function entrar() {
    let email = document.querySelector('#email')
    let senha = document.querySelector('#senha')

    let listaUser = []

    let userValid = {
        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    await listaUser.forEach((item) => {
        if (item.emailCad == email.value && item.senhaCad == senha.value) {
            userValid = {
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    })

    if (email.value == userValid.email && senha.value == userValid.senha && email.value != '' && senha.value != '') {
        let token = Math.random().toString(10).substr(2)
        localStorage.setItem('token', token)
        setTimeout(function () { location.href = "http://127.0.0.1:5501/foi.html" });

    } else {
        alert('Email/Senha incorreta');
        setTimeout(function () { location.href = "http://127.0.0.1:5501/conta.html" });
    }

}
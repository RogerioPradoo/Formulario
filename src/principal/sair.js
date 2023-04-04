if (localStorage.getItem('token') == null || localStorage.getItem('token') == undefined) {
    alert('vc precisa estar logado')
    window.location.href = "conta.html"
}

function sair() {
    localStorage.removeItem('token')
    setTimeout(function () { location.href = "http://127.0.0.1:5501/conta.html" });
}
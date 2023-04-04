function fazPost(url, body) {
    console.log("body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function () {
        console.log(this.responseText)
    }

    return request.responseText
}


function cadastraClientes() {
    event.preventDefault()
    url = "http://127.0.0.1:5000/clientes"
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let telefone = document.getElementById("telefone").value
    let cep = document.getElementById("cep").value
    let rua = document.getElementById("rua").value
    let numero = document.getElementById("numero").value
    let complemento = document.getElementById("complemento").value
    let bairro = document.getElementById("bairro").value
    let cidade = document.getElementById("cidade").value
    let uf = document.getElementById("uf").value

    if (nome != "" || email != "" || senha != "" || telefone != "" || cep != "" || rua != "" || numero != "" || complemento != "" || bairro != "" || cidade != "" || uf != "") {
        body = {
            "nome": nome,
            "email": email,
            "senha": senha,
            "telefone": telefone,
            "cep": cep,
            "rua": rua,
            "numero": numero,
            "complemento": complemento,
            "bairro": bairro,
            "cidade": cidade,
            "uf": uf
        }

        fazPost(url, body)
    } else {
        alert("Campo vazio. ")
    }
}
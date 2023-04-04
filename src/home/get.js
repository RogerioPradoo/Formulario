function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(clientes) {
    console.log(clientes)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = clientes.id
    tdNome.innetHTML = clientes.name

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;
}

function main() {
    let data = fazGet("http://127.0.0.1:5000/clientes");
    let clientes = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    clientes.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });

    // Para cada usuario
    // criar uma linha
    // adicionar na tabela
}

main();
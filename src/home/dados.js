function cadastrar() {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    if (nome.value == "" || email.value == "" || senha.value == "" || telefone.value == "" || cep.value == "" || rua.value == "" || numero.value == "" || complemento.value == "" || bairro.value == "" || cidade.value == "" || uf.value == "") {
        alert("Erro ao fazer o cadastro.")
    } else {

        listaUser.push
            ({
                nomeCad: nome.value,
                emailCad: email.value,
                senhaCad: senha.value,
                telefoneCad: telefone.value,
                cepCad: cep.value,
                ruaCad: rua.value,
                numeroCad: numero.value,
                complementoCad: complemento.value,
                bairroCad: bairro.value,
                cidadeCad: cidade.value,
                ufCad: uf.value
            })

        alert("criado com sucesso")

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
    }

}
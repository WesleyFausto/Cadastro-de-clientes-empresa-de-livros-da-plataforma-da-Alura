    async function buscaEndereco(cep){
        let mensgameErro = document.getElementById("erro");
        mensgameErro.innerHTML = "";
        try{

        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let conconsultaCepconvertida= await consultaCep.json();
    if(conconsultaCepconvertida.erro) {
            throw Error("Cep não existe!");
        }
        let cidade = document.getElementById("cidade");
        let logradouro = document.getElementById("endereco");
        let estado = document.getElementById("estado");
        
        cidade.value = conconsultaCepconvertida.localidade;
        logradouro.value = conconsultaCepconvertida.logradouro;
        estado.value = conconsultaCepconvertida.uf;

        console.log(conconsultaCepconvertida);
        return conconsultaCepconvertida;
    } catch(erro) {
        mensgameErro.innerHTML = `<p>CEP inválido. Tente novamente! </p>`;
    console.log(erro);
    }
}


let cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));



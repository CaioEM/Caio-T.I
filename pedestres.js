function formataCPF(cpf) { //FUNÇÃO PARA FORMATAR O CPF DIGITADO PELO USUARIO
    const elemento = cpf;   // PARAMETRO QUE VAI SER PASSADO NA FUNÇÃO
    const cpfValue = cpf.value; // RECEBE O VALOR DO CPF DIGITADO

    let cpfAtt;    //RECEBE O CPF FORMATADO
    cpfAtt = cpfValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,/*//AQUI É DEFINIDO A FORMATAÇÃO COM 3 GRUPOS RECEBEM 3 ELEMENTOS E 1 RECEBE 2 */
    function(regex,argumento1,argumento2,argumento3,argumento4){
        return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' +argumento4;
    })
    elemento.value = cpfAtt;

    var cpf = document.querySelector("idcpf").value;
    cpf.addEventListener("button", function(event){
        if(cpf.validity.patternMismatch){
            cpf.setCustomValidity("Digite apenas numeros nesse campo");
            btn.disable = true;
        } else{
            cpf.setCustomValidity("");
            btn.disable = false;
        }
    }
    )
}


function checarCPF(){
    var pessoa = document.getElementById("idcpf").value;
    if(pessoa == "501.489.218-33"){
        var dataISODataHora = new Date("2020-01-29T06:00:00Z");
        console.log(dataISODataHora);
        alert("Pessoa encontrada");        
    }else{
        alert("Pessoa nao cadastrada");
    }
}
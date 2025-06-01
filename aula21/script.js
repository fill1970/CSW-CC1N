
function adicionartarefa() {


    let inputtarefa = document.getElementById("456")
    let tarefa = inputtarefa.value
    document.getElementById("500").textContent = tarefa

    let lista = document.getElementById("listaul")
    let novatarefa = document.createElement("li")

    novatarefa.textContent= tarefa

    lista.appendChild(novatarefa)
}
function calculadora(){
    let numero1= Number(document.getElementById("numero1").value);
    let numero2= Number(document.getElementById("numero2").value);
    let operacao= document.getElementById("operacao").value;
    let resposta;

    switch(operacao){
        case'+': resposta = numero1 + numero2;
        break;

        case'-': resposta = numero1 - numero2;
        break;

        case'*': resposta = numero1 * numero2;
        break;

        case'/':  resposta = numero1 / numero2;
        break;

    }
    document.getElementById("resultado").innerText = resposta
}

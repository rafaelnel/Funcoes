

function areacirc() {
    let raio = document.getElementById('ac').value;
    let areacirc = 3.14 * raio * raio;
    document.getElementById('r1').innerHTML = areacirc;
}


function arearet() {
    let base = document.getElementById('ab').value;
    let altura = document.getElementById('ah').value;
    document.getElementById('r2').innerHTML = base * altura;
}

function hipotenusa() {
    let co = document.getElementById('co').value;
    let ca = document.getElementById('ca').value;
    let hip = (co * co) + (ca * ca)
    document.getElementById('r3').innerHTML = hip ** 0.5;
    document.getElementById('co').value = null;
    document.getElementById('ca').value = null;

}

function dolar() {
    let real = prompt("Quantos reais você quer converter?")
    let dolar = prompt("Qual o valor do dólar?")
    let valor = real / dolar
    alert('$' + valor)
}

function grauf() {
    let celsius = prompt("Qual a temperatura em celsius?")
    let far = (celsius * (9 / 5)) + 32
    alert(far + "F")
}


function media() {
    let n1 = parseFloat(prompt("Nota 1:"))
    let n2 = parseFloat(prompt("Nota 2:"))
    let n3 = parseFloat(prompt("Nota 3:"))
    let media = (n1 + n2 + n3) / 3
    alert("A média é de: " + media)
}

function raizes() {
    let a = prompt("Qual o valor de a?")
    let b = prompt("Qual o valor de b?")
    let c = prompt("Qual o valor de c?")
    let delta = (b * b) - (4 * a * c)
    let rpositivo = (Math.sqrt(delta) - b) / (2 * a)
    let rnegativo = (-Math.sqrt(delta) - b) / (2 * a)

    alert('Valor das raizes: ' + rpositivo + " e " + rnegativo)
}


//  DECLARAÇÃO reservar espaço na memória
//  ATRIBUIÇÃO preencher o espaço reservado
//  INICIALIZAÇÃO os dois juntos
//  VARIAVEL caixa
//  VALOR conteúdo
//  TIPO  tamanho

// Tipos de dados (lógicos: V OU F, numérico: INTEIROS / DECIMAIS,  alfanumérico: TEXTUAL / CÓDIGO)

// Lógicos - boolean
// Numérico - number
// Alfanumérico - string


// var - Pode ser alterado a declaração
// let - poder alterar apenas a atribuição
// const - não pode ser alterado após inicializado
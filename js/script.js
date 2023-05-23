

function areacirc() {
    let raio = document.getElementById('raio').value;
    let areacirc = 3.14 * raio * raio;
    document.getElementById('r1').innerHTML = areacirc.toFixed(2);
    document.getElementById('raio').value = null;
    document.getElementById('calc1').innerHTML = raio +"² x pi =" + areacirc.toFixed(2);
}


function arearet() {
    let br = document.getElementById('br').value;
    let hr = document.getElementById('hr').value;
    document.getElementById('r2').innerHTML = br * hr;
    document.getElementById('br').value = null;
    document.getElementById('hr').value = null;
    document.getElementById('calc2').innerHTML = br +"x" + hr +"="+ br * hr;
}


function areatri() {
    let bt = document.getElementById('bt').value;
    let ht = document.getElementById('ht').value;
    document.getElementById('r3').innerHTML = (bt * ht)/2;
    document.getElementById('bt').value = null;
    document.getElementById('ht').value = null;
    document.getElementById('calc3').innerHTML = bt +"x" + ht +"÷ 2 ="+ bt * ht/2;
}

function hipotenusa() {
    let co = document.getElementById('co').value;
    let ca = document.getElementById('ca').value;
    let hip = (co * co) + (ca * ca)
    document.getElementById('r4').innerHTML = (hip ** 0.5).toFixed(2);
    document.getElementById('co').value = null;
    document.getElementById('ca').value = null;
    document.getElementById('calc4').innerHTML = "hipotenusa = raiz ( "+ co +"² +"+ ca +"² ) = " +(hip**0.5).toFixed(2);

}

function bhaskara() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let delta = (b * b) - (4 * a * c)
    let rpositivo = (Math.sqrt(delta) - b) / (2 * a)
    let rnegativo = (-Math.sqrt(delta) - b) / (2 * a)

    document.getElementById('r5').innerHTML = rpositivo.toFixed(1);
    document.getElementById('r6').innerHTML = rnegativo.toFixed(1);
    document.getElementById('a').value = null;
    document.getElementById('b').value = null;
    document.getElementById('c').value = null;
}

function conversaodemoedas() {
    let real = document.getElementById('real').value;
    let dolar = document.getElementById('dolar').value;
    let valor = real / dolar
    document.getElementById('r7').innerHTML = "$" + valor.toFixed(2);
    document.getElementById('real').value = null;
    
}

function graus() {
    let celsius = document.getElementById('celsius').value;
    let far = (celsius * (9 / 5)) + 32
    document.getElementById('r8').innerHTML = far + "F";
    document.getElementById('celsius').value = null;
}

function conversaodevelocindade() {
    let km = document.getElementById('km').value;
    let m = km/3.6
    document.getElementById('r9').innerHTML = m.toFixed(2) + "m/s";
    document.getElementById('km').value = null;
}


function media() {
    let n1 = parseFloat(document.getElementById('n1').value)
    let n2 = parseFloat(document.getElementById('n2').value)
    let n3 = parseFloat(document.getElementById('n3').value)
    let media = (n1 + n2 + n3) / 3
    document.getElementById('r10').innerHTML =media.toFixed(2);
    document.getElementById('n1').value = null;
    document.getElementById('n2').value = null;
    document.getElementById('n3').value = null;
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
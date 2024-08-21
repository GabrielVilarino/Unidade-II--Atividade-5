
/*
Questão 01

Escreva um programa que calcule o IMC de um indivíduo, utilizando a fórmula 𝐼𝑀𝐶 = 𝑝𝑒𝑠𝑜/𝑎𝑙𝑡𝑢𝑟𝑎^2
*/

const prompt = require('prompt-async')

function calculaImc(peso, altura) {
    peso = parseFloat(peso)
    altura = parseFloat(altura)

    console.log(peso)
    console.log(altura)
    const imc = peso / Math.pow(altura, 2)
    return imc
}

async function questao01() {
    try {
        prompt.start()

        const { peso, altura } = await prompt.get(['peso', 'altura'])

        const imc = calculaImc(peso, altura)

        console.log(`Seu IMC é: ${imc.toFixed(2)}`)
    } catch (error) {
        console.error('Ocorreu um erro:', error)
    }
}
//questao01()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Questão 2

Escreva um programa que solicite ao usuário o valor do raio de uma esfera e calcule e
exiba o seu volume.
*/


function calculaVolume(raio){
    raio = parseFloat(raio)
    const pi = Math.PI
    volume = (4 * pi * Math.pow(raio, 3) / 3)

    return volume
}


async function questao02() {
    try {
        prompt.start()

        const { raio } = await prompt.get(['raio'])

        const volume = calculaVolume(raio)

        console.log(`Volume da esfera é: ${volume.toFixed(2)}`)
    } catch (error) {
        console.error('Ocorreu um erro:', error)
    }
}
//questao02()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Questão 3

Escreva um programa que calcule o perímetro e a área de um triângulo, utilizando as
fórmulas P = a + b + c e A = (b * h) / 2, onde a, b e c são os lados do triângulo e h é a
altura relativa ao lado b.
*/

function calculaPerimetro(a, b, c){
    a = parseFloat(a)
    b = parseFloat(b)
    c = parseFloat(c)

    perimetro = a + b + c

    return perimetro
}

function calculaArea(b, h){
    b = parseFloat(b)
    h = parseFloat(h)

    area = (b * h) / 2

    return area
}


async function questao03() {
    try {
        prompt.start();

        const { a, b, c, h } = await prompt.get(['a', 'b', 'c', 'h'])

        const perimetro = calculaPerimetro(a, b, c)

        const area = calculaArea(b, h)

        console.log(`O Perímetro é: ${perimetro.toFixed(2)}`)
        console.log(`A Área é: ${area.toFixed(2)}`)
    } catch (error) {
        console.error('Ocorreu um erro:', error)
    }
}

//questao03()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
Questão 4

Escreva um programa que calcule a equação de segundo grau (ax² + bx + c = 0)
utilizando as fórmulas de Bhaskara.
*/

function calculaBaskara(a, b, c){
    a = parseFloat(a)
    b = parseFloat(b)
    c = parseFloat(c)

    const delta = Math.pow(b, 2) - 4 * a * c;

    
    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        console.log(`As raízes da equação são: x1 = ${x1.toFixed(2)} e x2 = ${x2.toFixed(2)}`);
    } else if (delta === 0) {
        const x1 = -b / (2 * a);
        console.log(`A raiz da equação é: x = ${x1.toFixed(2)}`);
    } else {
        console.log('A equação não possui raízes reais.');
    }
}


async function questao04() {
    try {
        prompt.start();

        const { a, b, c } = await prompt.get(['a', 'b', 'c'])

        calculaBaskara(a, b, c)
    } catch (error) {
        console.error('Ocorreu um erro:', error)
    }
}

questao04()
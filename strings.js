/*
Questão 5

Faça um programa que leia uma palavra e verifique se a mesma é palíndromo (se
pode ser lida da mesma forma de trás para frente).

*/

const prompt = require('prompt-async')

function verificaPalindromo(palavra){
    palavra = palavra.toUpperCase()
    palavraInvertida = palavra.split('').reverse().join('')

    return palavra === palavraInvertida
}

async function questao05() {
    try {
        prompt.start();

        const { palavra } = await prompt.get(['palavra'])

        if (verificaPalindromo(palavra))
            console.log(`${palavra} é palíndromo`)
        else
            console.log(`${palavra} não é palíndromo`)
    } catch (error) {
        console.error('Ocorreu um erro:', error)
    }
}

//questao05()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Questão 6

Faça um programa que leia uma palavra e verifique se a mesma é palíndromo (se
pode ser lida da mesma forma de trás para frente).

*/
function contarLetra(palavra){
    let contagem = {}

    for (let letra of palavra){
        contagem[letra] = (contagem[letra] || 0) + 1
    }

    return contagem
}

function verificaAnagrama(palavra1, palavra2){
    palavra1 = palavra1.toUpperCase()
    palavra2 = palavra2.toUpperCase()

    if (palavra1.length !== palavra2.length){
        return false
    }

    const contagem1 = contarLetra(palavra1)
    const contagem2 = contarLetra(palavra2)
    
    for (let letra in contagem1){
        if (contagem1[letra] !== contagem2[letra]){
            return false
        }
    }

    return true
}

async function questao06() {
    try {
        prompt.start();

        const { palavra1, palavra2 } = await prompt.get(['palavra1', 'palavra2'])

        resultado = verificaAnagrama(palavra1, palavra2)

        if (resultado)
            console.log(`A palavra '${palavra2}' é anagrama da palavra '${palavra1}'`)
        else    
            console.log(`A palavra '${palavra2}' não é anagrama da palavra '${palavra1}'`)
    } catch (error) {
        console.error('Ocorreu um erro:', error)
    }
}

//questao06()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Questão 7

Faça um programa que receba uma frase e exiba a quantidade de espaços em branco
presentes na mesma.

*/

function verificaQuantidadeEspaco(frase){

    const partes = frase.split(' ')

    return partes.length - 1
}

async function questao07() {
    try {
        prompt.start();

        const { frase } = await prompt.get(['frase'])

        quantidadeEspaco = verificaQuantidadeEspaco(frase)

        console.log(`A quantidade de espaços na frase é: ${quantidadeEspaco}`)
    } catch (error) {
        console.error('Ocorreu um erro:', error)
    }
}

//questao07()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Questão 8

Escreva um programa que receba um nome completo e exiba o sobrenome (último
nome) primeiro.

*/

function formataNome(nomeCompleto){

    const partes = nomeCompleto.trim().split(' ')

    if (partes.length < 2) {
        return nome;
    }

    const ultimoNome = partes.pop()
    const nomeRestante = partes.join(' ')

    const nomeFormatado = `${ultimoNome} ${nomeRestante}`
    
    return nomeFormatado
}

async function questao08() {
    try {
        prompt.start();

        const { nomeCompleto } = await prompt.get(['nomeCompleto'])

        nomeFormatado = formataNome(nomeCompleto)

        console.log(`Nome formatado é: ${nomeFormatado}`)
    } catch (error) {
        console.error('Ocorreu um erro:', error)
    }
}

questao08()
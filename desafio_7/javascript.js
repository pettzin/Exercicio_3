// Faça um programa que receba três números inteiros, calcule e mostre a soma desses números.

let n1 = prompt('Informe o primeiro número: ')
let n2 = prompt('Informe o segundo número: ')
let n3 = prompt('Informe o terceiro número: ')

if (isNaN(n1) || isNaN(n2) || isNaN(n3) || n1.trim() === '' || n2.trim() === '' || n3.trim() === '') {
    alert("Informe um número válido")
    } else {
    n1 = parseInt(n1)
    n2 = parseInt(n2)
    n3 = parseInt(n3)
    let soma = (n1 + n2 + n3)
    alert(`A soma dos números informados é igual à ${soma}`)
} 
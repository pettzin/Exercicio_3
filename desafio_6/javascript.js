//Faça um script que leia três notas reais, calcule e mostre a média dessas notas

let n1 = prompt('Informe a primeira nota: ')
let n2 = prompt('Informe a segunda nota: ')
let n3 = prompt('Informe a terceira nota: ')

if (isNaN(n1) || isNaN(n2) || isNaN(n3) || n1.trim() === '' || n2.trim() === '' || n3.trim() === '') {
    alert("Informe um número válido")
    } else {
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    n3 = parseFloat(n3)
    let media = (n1 + n2 + n3)/3
    alert(`A média das notas informadas é igual à ${media}`)
} 

// Faça um script que leia um número inteiro, em seguida calcule e mostre o dobro desse número.

let n1 = prompt('Informe um número inteiro: ')

if (isNaN(n1) || n1.trim() === '') {
    alert("Informe um número válido")
    } else {
    n1 = parseInt(n1)
    let multipli = n1 * 2
    alert(`O dobro do número ${n1} é igual à ${multipli}`)
} 

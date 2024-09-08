// Faça um script para calcular o quadrado de um número informado pelo usuário.

let n1 = prompt('Informe um número: ')

if (isNaN(n1) || n1.trim() === '') {
    alert("Informe um número válido")
    } else {
    n1 = parseInt(n1)
    let quad = n1 ** 2
    alert(`O quadrado do número ${n1} é igual à ${quad}`)
} 

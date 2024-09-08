//Faça um script para calcular e mostrar a área de um triângulo (área = (base * altura) /2.

let n1 = prompt('Informe o valor da base do triângulo: ')
let n2 = prompt('Informe a altura do triângulo: ')

if (isNaN(n1) || isNaN(n2) ||  n1.trim() === '' || n2.trim() === '') {
    alert("Informe um número válido")
    } else {
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    let trig = (n1 * n2)/2
    alert(`A área do triângulo é igual à ${trig}`)
} 
//Faça um script para somar dois números informados pelo usuário.

n1 = prompt("Informe o primeiro número: ")
n2 = prompt("Informe o segundo número: ")

if ( isNaN(n1) || isNaN(n2) || n1.trim() === '' && n2.trim() === ''){
    alert("Informe um número válido")
} else {
    n1 = parseInt(n1)
    n2 = parseInt(n2)
    soma = n1 + n2
    alert (`A soma entre os números ${n1} e ${n2} é igual à ${soma}`)
}
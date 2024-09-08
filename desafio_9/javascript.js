/*Faça um script que leia o nome de uma pessoa, o ano de nascimento dessa pessoa e o ano atual, calcule
e mostre a idade dessa pessoa e seu nome em linhas separadas.*/

var nome = prompt("Informe seu nome: ")
var nasc = prompt("Informe o ano de nascimento: ")
var ano_atual = prompt("Informe o ano atual: ")

if (isNaN(nasc) || isNaN(ano_atual) || !isNaN(nome) || nasc.trim() === '' || ano_atual.trim() === '' || nome.trim() === '') {
    alert("Informe valores válidos");
} else {
    nasc = parseInt(nasc);
    ano_atual = parseInt(ano_atual);
    let idade = ano_atual - nasc 
    alert('Seu nome é ' + nome + '\nE sua idade atual é ' + idade + ' anos');
} 
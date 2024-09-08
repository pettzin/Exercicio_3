/*Faça um script que receba a altura de um degrau de uma escada e a altura que um pedreiro deseja
alcançar utilizando essa escada, calcule e mostre quantos degraus ele deverá subir para atingir seu objetivo,
os valores fornecidos devem ser em metros.*/

var altura_degr = prompt("Informe a altura do degrau: (metros)")
var altura_deseja = prompt("Informe a altura desejada a escada: (metros)")

if (isNaN(altura_degr) || isNaN(altura_deseja) || altura_deseja.trim() === '' || altura_degr.trim() === '') {
    alert("Informe valores válidos");
} else {
    altura_degr = parseFloat(altura_degr)
    altura_deseja = parseFloat(altura_deseja)

     var altura_esca = altura_deseja/altura_degr
    alert(`O pedreiro vai precisar subir ${altura_esca} degraus para atingir ${altura_deseja} metros`)
}

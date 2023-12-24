const nome = 'João victor';
const idade = 22;
const peso = 95;
const altura = 1.88;


let imc;
let anoNascimento;
anoNascimento = 2023 - idade


 imc = peso / (altura ** 2);

console.log(` ${nome} tem ${idade} anos, nasceu em ${anoNascimento}, pesa ${peso}kg, \
tem ${altura} de altura,  seu IMC é: ${parseInt(imc)} `);

//Declare uma variável de nome weight
let weight;

//Que tipo de dado é a variável acima?
//Nenhum valor foi atribuído à variável acima, então ela é undefined.

//Declare uma variável e atribua valores para cada um dos dados
let name = "Leonardo";
let age = 19;
weight = 70.4;
let isSubscribed = true;

//A variável student abaixo é de que tipo de dado?
// A variável student é do tipo objeto.

// Atribua a ela as mesmas propriedades e valores do exercício 3.
let student = {
    name: "Leonardo",
    age: 19,
    weight: 70.4,
    isSubscribed: true
};

// Mostre no console a seguinte mensagem:
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

//Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
let students = [];

//Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
students.push(student);
console.log(students);

//Coloque no console o valor da posição zero do Array acima
console.log(students[0]);

//Crie um novo student e coloque na posição 1 do Array students
let newStudent = {
    name: "Sofia",
    age: 18,
    weight: 55.6,
    isSubscribed: false
};

students.push(newStudent);
console.log(students);

//Sem rodar o código responda qual é a resposta do código abaixo e por que?Após sua resposta, rode o código e veja se você acertou.
//console.log(a)
//var a =1

//Creio que o código resultará em undefined, pois pelo ao escopo elevado do var, a variável ainda não foi atribuída.
console.log(a)
var a =1
//Eu estava certo.

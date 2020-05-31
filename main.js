
/*


var nome = 'Vitória';
var idade = 21

alert ('Olá, ' + nome + ' sua idade é ' + idade)

frase = 'O Japão é a melhor seleção do mundo'
console.log(frase.replace('Japão', 'Brasil'));
console.log(frase.toLowerCase())
console.log(frase.toUpperCase())


// Listas 
var lista = ["maça", "pêra", "laranja"];

console.log(lista[1])
lista.push("uva");
console.log(lista);
console.log(lista.pop());
console.log(lista.reverse());

console.log(lista.toString());
console.log(lista.join(" | "));


//Dictionary
var frutas = {
    nome: "maça",
    cor: "vermelha"
}


console.log(frutas.nome);    


//Lista com dicionários
var food = [{nome: "maça", cor: "vermelha"}, {nome: "banana", cor: "amarelo"}]

console.log(food);
console.log(food[1].nome)

*/


/*

//Condicionais
var idade = prompt("Qual a sua idade?")

if(idade >= 18){
    alert("Maior de idade");
}
else{
    alert("menor de idade");
}*/

/*

//Datas JS
var d = new Date();
alert(d.getMonth());
console.log('Hoje é ' + d.getDate() + "/" + (d.getMonth() + 1) + "/"+ (d.getFullYear()));

*/


/*

//Laço While

var count = 5;

while (count >= 0){
    console.log(count);
    count --;
}*/

/*
//Laço For

for(var i = 5; i >=0; i--){
    console.log(i);
}*/





function soma(n1, n2){
    return n1 + n2;
}

function setreplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

function validaIdade (idade){
    if(idade >= 18){
        validar = true;
    }
    else{
        validar = false;
    }
}

var idade = 18;

alert(soma(5, 10));
alert(setreplace("Olá, pessoas", "pessoas", " mundo"));
alert (validaIdade(idade))






















//Objetivo
////Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

//- nome
//- idade
//- tipo (ex: guerreiro, mago, monge, ninja )

//além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

//- exibir a mensagem: "o {tipo} atacou usando {ataque}")
///- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
//- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)


class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        if (tipo === 'mago'){
            return "magia"
        }else if(tipo === 'guerreiro'){
            return "espada"
        }else if(tipo === 'monge'){
            return "artes marciais"
        }else {
            return "shuriken"
        }

    }

    escrever(){
        console.log("o " + this.tipo + ' atacou usando ' + this.atacar )

    }
}
let myHeroi = new Heroi('Lucas', 41, "mago")

myHeroi.escrever()
//Classe que recebe os dados do herói.
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  //Método atacar utiliza o vetor ataque para comparar o tipo de herói.
  atacar() {
    let ataque = ["Magia", "Espada", "Artes Marciais", "Shuriken"];

    if (this.tipo === "Mago") {
      console.log(`O ${this.tipo} atacou usando ${ataque[0]}.`);
    } else if (this.tipo === "Guerreiro") {
      console.log(`O ${this.tipo} atacou usando ${ataque[1]}.`);
    } else if (this.tipo === "Monge") {
      console.log(`O ${this.tipo} atacou usando ${ataque[2]}.`);
    } else {
      console.log(`O ${this.tipo} atacou usando ${ataque[3]}.`);
    }
  }
}

//Instanciando um novo objeto(heroi)
let heroiA = new Heroi("Subzero", 500, "Guerreiro");
console.log(heroiA);
heroiA.atacar();


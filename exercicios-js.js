
//   //Destructuring - Desestruturação

//   //Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
  const event ={
    clientX: 'joao',
    clientY: 'maria'
  }

  function clientes(event) {
    const {clientX, clientY} = event
    console.log(clientX, clientY);
  }
  
  clientes(event)


//   //A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
  const obj = { first: 'Jane', last: 'Doe' };

  const {first} = obj

  console.log(first)
  
//   //A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
  company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
  };

const {name, products:{shirts:{colors}}} = company;

console.log(name, colors);


  
//   //Arrays e seus métodos
//   //A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
//   var numbers = [4, 9, 16, 25];
  
//   //A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
  var numbers = [65, 44, 12, 4];
  const multiplicados = numbers.map((numeros)=> numeros*10);
  console.log(multiplicados)


  
//   //A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
  var ages = [32, 33, 16, 40];

  const maiorDeIdade = ages.filter((idade)=> idade >= 18);
  console.log(maiorDeIdade)
  
//   //A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
  data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];
  
  const cachorros = data.filter((obj)=> obj.type.includes('dog') )
  console.log(cachorros)

   //Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
  
   const somaIdade = cachorros.map((obj)=> obj.age).reduce((a, b)=> a + b)

   console.log(`A idade dos cães é ${somaIdade}`)


//   //Parte B - Hora do Jogo!
//   //Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
//   var getShirtsColorsAmount = function (company) {
//     colors = company.products.shirts.colors;
//     return colors.length;
//   };
  
//   
  
//   //A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];



const nomeCompleto = persons.map((nome)=> nome.firstname + " " + nome.lastname);

console.log(nomeCompleto)
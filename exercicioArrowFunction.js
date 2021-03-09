// //Parte A - Aquecimento Arrow Function

// //Transforme as funções declarativas abaixo em Arrow Functions
// const upperName = function (name) {
//     return name.toUpperCase();
//   };
//   function myFunction(p1, p2) {
//     return p1 * p2;
//   }
//   function toCelsius(fahrenheit) {
//     return (5 / 9) * (fahrenheit - 32);
//   }


// const upperName = (name)=>{
//     return name.toUpperCase();
// };

// const myFunction = (p1, p2)=>{
//     return p1 * p2;
// };

// const toCelsius = (fahrenheit)=>{
//     return (5 / 9) * (fahrenheit - 32);
// };

// console.log(upperName("samantha"));

// console.log(myFunction(5, 9));

// console.log(toCelsius(95));


//   //Parte B - Hora do Jogo!
//   //Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
  const getShirtsColorsAmount = (company)=> {
    
    const {products:{shirts:{colors}}} = company
    return colors.length;
  };

  

  
  
  
  
//   //A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
  ];
  
  const nomeCompleto = persons.map((nome)=> nome.firstname + " " + nome.lastname);
  
  console.log(nomeCompleto)
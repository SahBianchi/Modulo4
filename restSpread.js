//   //Rest & Spread
//   //Utilizando um operador clone o objeto c​lothes
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };

  const copiaClothes = {...clothes}

  console.log(clothes)
  console.log(copiaClothes)


  
//   //Novamente utilizando um operador, clone o objeto c​lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks

const copiaClothes2 = {...clothes}

  copiaClothes2["shoes"] = {colors:['yellow', 'purple']}

  console.log(copiaClothes2)


  //A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
  
  const clothes2 = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };

  const {pants, ...resto} = clothes2;

  console.log(pants)
  console.log(resto)
  
//   //Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6];

  const [primeiroN, ...arrSem1] = arr
  const [primeiroN2, ...arrSem4] = arr2

  const juntaArr = [...arrSem1, ...arrSem4]

  console.log(arrSem1)
  console.log(arrSem4)
  console.log(juntaArr)
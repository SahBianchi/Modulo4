//3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados.

const fetch = require("node-fetch")

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
.then(resp => resp.json())
.then(json=>{
    const resultado = [];
    const obj = json.meals[0]; 

    if (obj < 10) {
        
    }

    
    

})


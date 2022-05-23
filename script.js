const url = 'https://pokeapi.co/api/v2/pokemon/';
let input = document.getElementById('inputUser');
let searchBtn = document.getElementById('btnUser');
let nameDisplay = document.getElementById('name');
let imgDisplay = document.getElementById('sprite');
let IDDisplay = document.getElementById('ID');
let pokeInfoDispley = document.getElementById('pokeInfo');
let pokeAbilitiesDisplay = document.getElementById('abilities');
let evolutionNameDisplay = document.getElementById('evolutionName');
let evolutionImgDisplay = document.getElementById('evolustionSprite');

searchBtn.addEventListener('click',async function(){
    pokeAbilitiesDisplay.innerHTML = "";
    const response  = await fetch(url+input.value);
    let data = await response.json();
    console.log(data);
    nameDisplay.innerText = data.name;
    
    imgDisplay.setAttribute('src' , data.sprites.front_default);
    IDDisplay.innerText = `PokéID: ${data.id}`;

    
    for (let i = 0 ;i<4;i++){
        pokeAbilitiesDisplay.innerHTML += `<li>${data.moves[i].move.name}</li>`;
    }


})





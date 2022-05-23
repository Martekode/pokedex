const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
let input = document.getElementById('inputUser');
let searchBtn = document.getElementById('btnUser');
let nameDisplay = document.getElementById('name');
let imgDisplay = document.getElementById('sprite');
let IDDisplay = document.getElementById('ID');
let pokeInfoDispley = document.getElementById('pokeInfo');
let pokeAbilitiesDisplay = document.getElementById('abilities');
searchBtn.addEventListener('click',async function(){
    pokeAbilitiesDisplay.innerHTML = "";
    const response  = await fetch(url);
    let data = await response.json();
    console.log(data);
    console.log(data.results[input.value].url);
    nameDisplay.innerText = data.results[input.value].name;

    const responseInput = await fetch(data.results[input.value].url);
    let dataInput = await responseInput.json();

    console.log(dataInput);
    imgDisplay.setAttribute('src' , dataInput.sprites.front_default)
    IDDisplay.innerText = `PokéID: ${dataInput.id}`;

    dataInput.abilities.forEach(move =>{
        pokeAbilitiesDisplay.innerHTML += `<li>${move.ability.name}</li>`;
    })
})





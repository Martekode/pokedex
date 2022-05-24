const url = 'https://pokeapi.co/api/v2/pokemon/';
const evoUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
let input = document.getElementById('inputUser');
let searchBtn = document.getElementById('btnUser');
let nameDisplay = document.getElementById('name');
let imgDisplay = document.getElementById('sprite');
let IDDisplay = document.getElementById('ID');
let pokeInfoDispley = document.getElementById('pokeInfo');
let pokeAbilitiesDisplay = document.getElementById('abilities');
let evolutionNameDisplay = document.getElementById('evolutionName');
let evolutionImgDisplay = document.getElementById('evolutionSprite');

searchBtn.addEventListener('click',async function(){
    pokeAbilitiesDisplay.innerHTML = "";
    evolutionImgDisplay.innerHTML ="";
    evolutionNameDisplay.innerHTML= "";
    let inputLowerCase = input.value.toLowerCase();
    if (inputLowerCase == "mister mime" ||inputLowerCase == "mr.mime"||inputLowerCase == "mr.-mime"||inputLowerCase == "mr mime"||inputLowerCase =="mr. mime"){
        inputLowerCase = "mr-mime";
    }
    const response  = await fetch(url+inputLowerCase);
    let data = await response.json();
    console.log(data);
    nameDisplay.innerText = data.name;
    
    imgDisplay.setAttribute('src' , data.sprites.front_default);
    IDDisplay.innerText = `PokéID: ${data.id}`;
    console.log(data.moves)
    if (data.moves.length >=4){
        for (let i = 0 ;i<4;i++){
            pokeAbilitiesDisplay.innerHTML += `<li>${data.moves[i].move.name}</li>`;
        }
    }
    else{
        for(let i =0; i<data.moves.length;i++){
            pokeAbilitiesDisplay.innerHTML += `<li>${data.moves[i].move.name}</li>`;
        }
    }
    

    const nextEvoUrlFetch = await fetch(evoUrl+data.name);
    let dataNextEvo = await nextEvoUrlFetch.json();
    console.log(dataNextEvo);
    const urlChainfetch = dataNextEvo.evolution_chain.url;
    const nextEvolutionFetch = await fetch(urlChainfetch);
    let dataNewEvo = await nextEvolutionFetch.json();
    console.log(dataNewEvo);
    if (dataNextEvo.evolves_from_species === null){
        let evoName = dataNewEvo.chain.evolves_to[0].species.name;
        evolutionNameDisplay.innerText = `evolves to: ${evoName}`;

        const evoFetch = await fetch(url + evoName);
        let dataEvo = await evoFetch.json();
        console.log(dataEvo)
        evolutionImgDisplay.setAttribute('src' , dataEvo.sprites.front_default);
        
    }
    else{
        let evoName = dataNextEvo.evolves_from_species.name;
        evolutionNameDisplay.innerText = `evolves from: ${evoName}`;
        const evoFetch = await fetch(url + evoName);
        let dataEvo = await evoFetch.json();
        console.log(dataEvo)
        evolutionImgDisplay.setAttribute('src' , dataEvo.sprites.front_default);
    }
   
      
})





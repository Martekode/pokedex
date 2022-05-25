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
    evolutionImgDisplay.setAttribute('src',"");
    imgDisplay.setAttribute('src',"./pokeball-png-45330.png");
    IDDisplay.innerText = "PokéId";
    pokeAbilitiesDisplay.innerHTML = "";
    evolutionNameDisplay.innerHTML= "evolution name";
    let inputLowerCase = input.value.toLowerCase();
    if (inputLowerCase == "mister mime" ||inputLowerCase == "mr.mime"||inputLowerCase == "mr.-mime"||inputLowerCase == "mr mime"||inputLowerCase =="mr. mime"||inputLowerCase == "mrmime"){
        inputLowerCase = "mr-mime";
    }
    else if(inputLowerCase == 0||inputLowerCase > 898 && inputLowerCase <=10000){
        alert('ID is invalid, input changed to "1"');
        inputLowerCase = 1;
    }
    else if (inputLowerCase== "darmanitan"){
        inputLowerCase = "darmanitan-standard";
    }
    
    const response  = await fetch(url+inputLowerCase);
    let data = await response.json().catch(error => {
        nameDisplay.innerText = "that's an invalid pokemon name or id";
    });
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
    

    const nextEvoUrlFetch = await fetch(evoUrl+data.id);
    let dataNextEvo = await nextEvoUrlFetch.json();
    console.log(dataNextEvo);
    console.log('datanextevo');
    const urlChainfetch = dataNextEvo.evolution_chain.url;
    const nextEvolutionFetch = await fetch(urlChainfetch);
    let dataNewEvo = await nextEvolutionFetch.json();
    console.log(dataNewEvo);
    console.log('newevo');
    console.log(dataNextEvo);
    if (dataNextEvo.evolves_from_species === null){
        if (dataNewEvo.chain.evolves_to[0]){
        let evoName = dataNewEvo.chain.evolves_to[0].species.name;
        evolutionNameDisplay.innerText = `evolves to ${evoName}`;

        const evoFetch = await fetch(url + evoName);
        let dataEvo = await evoFetch.json();
        console.log(dataEvo)
        evolutionImgDisplay.setAttribute('src' , dataEvo.sprites.front_default);
        
        }else{
            evolutionNameDisplay.innerText="no evo";
        }
        
    }
    else{
        let evoName = dataNextEvo.evolves_from_species.name;
        evolutionNameDisplay.innerText = `evolves from ${evoName}`;
        const evoFetch = await fetch(url + evoName);
        let dataEvo = await evoFetch.json();
        console.log(dataEvo)
        evolutionImgDisplay.setAttribute('src' , dataEvo.sprites.front_default);
    }
   
      
})





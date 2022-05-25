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
    let inputLowerCase = input.value.replace(/\s+/g, '-').toLowerCase();
    let inputLowerCaseFiltered = inputLowerCase.replace(/\.+/g,'');
    console.log(inputLowerCaseFiltered);
    if(inputLowerCaseFiltered == 0||inputLowerCaseFiltered > 898 && inputLowerCaseFiltered <=10000){
        alert('ID is invalid, input changed to "1"');
        inputLowerCaseFiltered = 1;
    }
    else if (inputLowerCaseFiltered== "darmanitan"){
        inputLowerCaseFiltered = "darmanitan-standard";
    }
    
    const response  = await fetch(url+inputLowerCaseFiltered);
    let data = await response.json().catch(error => {
        nameDisplay.innerText = "that's an invalid pokemon name or id";
    });
    console.log(data.types[0].type.name)
    if (data.types[0].type.name == "fire"){
        document.getElementById('black').style.backgroundColor = "orange";
    }
    else if (data.types[0].type.name == "water"){
        document.getElementById('black').style.backgroundColor = "blue";
    }
    else if (data.types[0].type.name == "electric"){
        document.getElementById('black').style.backgroundColor = "yellow";
    }
    else if (data.types[0].type.name == "grass"){
        document.getElementById('black').style.backgroundColor = "green";
    }
    else if (data.types[0].type.name == "ice"){
        document.getElementById('black').style.backgroundColor = "lightblue";
    }
    else if (data.types[0].type.name == "fighting"){
        document.getElementById('black').style.backgroundColor = "brown";
    }
    else if (data.types[0].type.name == "poison"){
        document.getElementById('black').style.backgroundColor = "purple";
    }
    else if (data.types[0].type.name == "ground"){
        document.getElementById('black').style.backgroundColor = "burlywood";
    }
    else if (data.types[0].type.name == "flying"){
        document.getElementById('black').style.backgroundColor = "cyan";
    }
    else if (data.types[0].type.name == "psychic"){
        document.getElementById('black').style.backgroundColor = "pink";
    }
    else if (data.types[0].type.name == "bug"){
        document.getElementById('black').style.backgroundColor = "lightgreen";
    }
    else if (data.types[0].type.name == "rock"){
        document.getElementById('black').style.backgroundColor = "chocolate";
    }
    else if (data.types[0].type.name == "ghost"){
        document.getElementById('black').style.backgroundColor = "blueviolet";
    }
    else if (data.types[0].type.name == "dark"){
        document.getElementById('black').style.backgroundColor = "black";
    }
    else if (data.types[0].type.name == "dragon"){
        document.getElementById('black').style.backgroundColor = "cadetblue";
    }
    else if (data.types[0].type.name == "steel"){
        document.getElementById('black').style.backgroundColor = "aliceblue";
    }
    else if (data.types[0].type.name == "fairy"){
        document.getElementById('black').style.backgroundColor = "fuchsia";
    }
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





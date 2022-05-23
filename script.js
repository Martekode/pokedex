const url = 'https://pokeapi.co/api/v2/pokemon/';
let input = document.getElementById('inputUser');
let searchBtn = document.getElementById('btnUser');
let nameDisplay = document.getElementById('name');
let imgDisplay = document.getElementById('sprite');
searchBtn.addEventListener('click',async function(){
    const response  = await fetch(url+input.value);
    let data = await response.json();
    console.log(data);
    nameDisplay.innerText = data.name;
    imgDisplay.setAttribute('src' , data.sprites.front_default)
})





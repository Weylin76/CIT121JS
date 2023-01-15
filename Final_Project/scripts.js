//Created a container to hold the image
const container = document.querySelector("#container");

//Created a space for the image
const newImg = document.createElement("img");
baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

//Created a for loop to grab all images and add one on each loop
for(let i = 1; i<899; i++){
    //Create a div for each pokemon
    const pokemon = document.createElement('div');
    
    //create a class to sytle all images
    pokemon.classList.add("pokemon")

    //add each element and counter based on the loop
    const label = document.createElement('span');
    label.innerHTML = `#${i}`;
    const newImg = document.createElement("img");
    newImg.src = `${baseURL}${i}.png` 

    //append all data
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)
}
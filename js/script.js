const P = new Pokedex.Pokedex();

  document.getElementById("SB").onclick=function(){
   var PS= document.getElementById("Search").value;
   P.getPokemonByName(PS)
  .then(res => {
    //om det blir rätt körs denna kod:
    console.log(res);
    document.getElementById("pokemon_name").innerHTML = res.name;
    document.getElementById(
      "pokemon_sprite"
    ).innerHTML = `<img src="${res.sprites.front_default}"/>`;
    document.getElementById(
      "pokemon_sprite"
    ).innerHTML += `<img src="${res.sprites.front_shiny}"/>`;
    document.getElementById("pokemon_stats").innerHTML= res.stats[0].stat.name; 
    document.getElementById("pokemon_stats").innerHTML+= "<br> " + res.stats[0].base_stat;
  })
  .catch(err => {
    //om det blir fel körs denna kod:
    console.log(err);
    document.getElementById("pokemon_name").innerHTML =
      "No pokemon by that name";
  });
  }


const P = new Pokedex.Pokedex();

P.getPokemonByName("59")
  .then(res => {
    //om det blir rätt körs denna kod:
    console.log(res);
    document.getElementById("pokemon_name").innerHTML = res.name;
    document.getElementById(
      "pokemon_sprite"
    ).innerHTML = `<img src="${res.sprites.front_default}"/>`;
  })
  .catch(err => {
    //om det blir fel körs denna kod:
    console.log(err);
    document.getElementById("pokemon_name").innerHTML =
      "No pokemon by that name";
  });

# Projekt Pokemon

## Besrkivning

I detta projekt är det tanken att ni ska använda er av information som ni hämtar från en annan server via ett API, som i detta fall heter [PokéAPI](https://pokeapi.co/).

Ni kommer använda er av ett bibliotek som heter [pokeapi-js-wrapper](https://github.com/PokeAPI/pokeapi-js-wrapper#pokeapi-js-wrapper-).

Biblioteket har en uppsättning funktioner som kan hämta information om Pokémon av olika slag.

[Här](https://github.com/PokeAPI/pokeapi-js-wrapper#endpoints) finns en lista med alla olika funktioner, med exempel, som ni kan använda er av.

I de olika funktionerna så kommer ni alltid landa i att ni får tillbaka ett JSON-objekt. Om ni har t.ex. sökt på 'bulbasaur' så kommer ni få följande objekt:
![JSON Exempel](/images/json_example.png)

För att få ut en bild (sprite) så skriver ni följande:

`response.sprites.front_default`

Response är då hela objektet, sprites är ett attribut hos objektet som i sin tur har ett attribut som heter front_default som är själva bilden.

## Uppgiften

Gör en hemsida som:

- Kan söka efter Pokémon
- Visa upp:
  - Bild
  - Stats (attack, special attack, defense, ...)
  - Types (Grass, Poison, Fire, ... )
- Säger till om Pokémonen som användaren söker efter inte finns.

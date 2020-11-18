import Pokemon from "./pokemon.js";
import random from "./random.js";

export default async function generatePlayer(selector) {
  const pokemons = await getPokemons();

  return new Pokemon({
    ...pokemons[random(1, pokemons.length) - 1],
    selector,
  });
}

export async function getPokemons() {
  const responce = await fetch(
    "https://reactmarathon-api.netlify.app/api/pokemons"
  );
  const body = await responce.json();
  return body;
}

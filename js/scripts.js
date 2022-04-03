let pokemonList = [
    {
        name: "Charmander",
        number: "1",
        height: 2,
        types: ["fire"],
        weaknesses: ["water", "ground", "rock"],
    },
    {
        name: "Wartortle",
        number: "2",
        height: 3.03,
        types: ["water"],
        weaknesses: ["grass", "eletric"],
    },
    {
        name: "Bulbasaur",
        number: "3",
        height: 2.04,
        types: ["grass", "poison"],
        weaknesses: ["fire", "psychic", "flying", "ice"],
    },
];
for (let i = 0; i < pokemonList.length; i++) {
    let statement = "";
    if (`${pokemonList[i].height}` >= 3) {
        statement = "- Wow, that's big!";
    } else {
        statement = "";
    }
    document.write(
        `<div>${pokemonList[i].name} (height: ${pokemonList[i].height}) ${statement}</div>`
    );
}
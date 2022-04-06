
let pokemonRepository = (function () {
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
    function add(pokemon) {
        pokemonList.push(pokenmon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll,
    };
})();

let pokemonList = pokemonRepository.getAll();
pokemonList.forEach(function (pokemon) {
    let statement = "";
    pokemon.height >= 3 ? (statement = "-Wow, that is big")
        : statement = "";
    document.write(
        `<div> ${pokemon.name} (heigth: ${pokemon.height}) ${statement}</div>`
    );
});









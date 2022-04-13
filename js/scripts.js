
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
        pokemonList.push(pokemon);
      }
    
      
      function getAll() {
        return pokemonList;
      }
    
      
      function showDetails(pokemon) {
        console.log(pokemon.name);
      }
    
      
      function addListener(button, pokemon) {
        button.addEventListener("click", function () {
          showDetails(pokemon);
        });
      }
    
     
      function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        addListener(button, pokemon);
      }
    
      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
      };
    })();
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });

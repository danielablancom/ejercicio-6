document.addEventListener("DOMContentLoaded", function (event) {
    fetchData();
});

const showPokemones = document.getElementById("pokemones");

const fetchData = async () => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await res.json();
        dataPokemones(data.results)
    } catch (err) {
        console.log(err)
    }
}

const dataPokemones = async (data) => {
    try {
        for (index of data) {
            const response = await fetch(index.url);
            const results = await response.json();

            let card = "";
            const container = document.createElement("div");
            container.setAttribute("id", "container");
            container.setAttribute("class", "container");
            card = `<img class="container__img" src=${results.sprites.other.dream_world.front_default}>
            <p class ="container__paragrah">${results.name}</p>`
            showPokemones.appendChild(container);
            container.innerHTML = card;
        }
    } catch (err) {
        console.log(err)
    }
}

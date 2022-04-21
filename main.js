const rickAndMorty = document.querySelector('.modal-body')


function personaje () {
    const numero = document.getElementById("numero").value;
    console.log(numero);
    if (numero < 827) {
        fetch (`https://rickandmortyapi.com/api/character/0,${numero}`)
        .then ((response) => response.json())
        .then ((data) => {
            data.forEach (element => {
                let card = document.createElement('div')
                card.id = element.id;
                card.innerHTML = `
                <img class="card-img-top" src="${element.image}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">Name: ${element.name}</h5>
                <h6 class="card-title">Status: ${element.status}</h6>
                <h6 class="card-title">Specie: ${element.species}</h6>
                <h6 class="card-title">Origin: ${element.origin.name}</h6>
                <h6 class="card-title">Gender: ${element.gender}</h6>
                </div>`
                rickAndMorty.appendChild(card);
            })
        })
    } else {
        alert('Porfavor ingresa un numero entre 1 y 826')
    }
}




// fetch ("https://rickandmortyapi.com/api/character/?page=13")
// .then ((response) => response.json())
// .then ((data) => {console.log(data)})
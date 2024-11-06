const URL = 'https://672a8935976a834dd023b47e.mockapi.io/usuario/animal';

function buscaAnimal(){
    
    fetch(URL)
        .then(response => response.json())
        .then(resp => {
            console.log(resp);
            atualiza(resp);
        });
}

function atualiza(lista){
    let listaAnimal = document.querySelector('#lista');

    listaAnimal.innerHTML = ' ';

    lista.forEach((animal, index) => {
        listaAnimal.innerHTML +=
        `<li id="${index}" class="">${animal.id} - <b>${animal.nome}<b> - (${animal.idade}) - ${animal.raca}</li>`;
    });

}

function cadastro(){

    fetch(URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            nome: 'Totó',
            idade: 12,
            raca: 'Cachorro'
        })
    })
    .then(response => response.json())
    .then(novo => {
        console.log(novo);
        buscaAnimal();
    })
    .catch(err => {
        console.log(err);
    })
}

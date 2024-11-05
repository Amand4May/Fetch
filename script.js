const URL = 'https://672a8935976a834dd023b47e.mockapi.io/usuario/:cliente';

async function chamarApi(){
    const resp = await fetch(URL);
    console.log(resp);
}

chamarApi();
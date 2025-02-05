let amigos = []
function adicionarAmigo() {
    let comando = document.getElementById('amigo').value;
    console.log(comando.trim())
    if (comando.trim() === ""){
        return;
    };
    amigos.push(comando);
    atualizarLista();

}
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    };

    let amigoSorteado = parseInt(Math.random() * amigos.length);
    amigoSorteado = amigos[amigoSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
};

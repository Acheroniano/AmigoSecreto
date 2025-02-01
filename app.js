// usuarios podem inserir nomes no campo de texto
let friendsLista = [];
let lista = document.getElementById('listaAmigos');
lista.innerHTML = '';
for (let i = 0; i < friedsLista.length; i++){
    let item = document.createElement('li')
}

// adicionar nome na lista clicando em "adicionar"
function adicionarAmigo(){
    let nomeDigitado = document.getElementById('amigo')
    let nome = nomeDigitado.value;
    if (nome === ''){
        alert('Desculpe, não pode ser nome vazio....')
        return;
    }
        if (friendsLista.includes(nome)) {
            alert('Amigo duplicado, digite outro...');
            return
        }
    friendsLista.push(nome)
    limparCampo();
    AtualizarLista();
    console.log(nome);
} 

// inserir nome numa lista no HTML
function AtualizarLista(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = '';
    friendsLista.forEach(function(nome) {
    lista.innerHTML += `<li>${nome}</li>`
    })
    }

AtualizarLista();

// botão "sortear amigo" aleatoriamente
function sortearAmigo(){
    if (friendsLista.length === 0){
        alert('Lista vazia! Impossível sortear, adicione um amigo...')
        return;
    }
    let amigosAleatorios = Math.floor(Math.random() * friendsLista.length);
    let amigoSorteado = friendsLista[amigosAleatorios];
    document.getElementById("resultado").innerHTML = `🎉 O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
    friendsLista.splice(amigosAleatorios, 1);
    AtualizarLista();
} 


// limpar o campo de entrada
function limparCampo(){
    nome = document.getElementById('amigo')
    nome.value = '';
}
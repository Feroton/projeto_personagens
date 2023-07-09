/*
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionars borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

OBEJTIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo.
    passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles
    passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
    passo 3 - Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.

    OBJETIVO 2 - quando passar o mouse em cima do personagem na lisatgem, trocar a imgem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande para adicionar as informações neke
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande
*/

// passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles

    const personagens = document.querySelectorAll('.personagem');

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

    personagens.forEach((personagem) => {
        personagem.addEventListener('mouseenter', () => {
            
            if(window.innerWidth < 450 ){
                window.scrollTo({top: 0, behavior: 'smooth'})
            }

            // passo 3 - Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.

            RemoverSelecaoDoPersonagem();

            personagem.classList.add('selecionado');
            
            // passo 1 - pegar o elemento do personagem grande para adicionar as informações neke
            AlterarImagemPersonagemSelecionado(personagem);

            // passo 3 - alterar o nome do personagem grande
            AlterarNomePersonagemSelecionado(personagem);

            // passo 4 - alterar a descrição do personagem grande
            AlterarDescricaoPersonagemSelecionado(personagem);


        })

    })

function AlterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function AlterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function AlterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function RemoverSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

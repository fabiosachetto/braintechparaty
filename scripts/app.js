function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado pelo usuário no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Expressão regular para validar se a entrada contém apenas letras
    const regex = /^[a-zA-Z]+$/;

    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa.trim() === "") {
        // Exibe uma mensagem de erro se o campo estiver vazio
        section.innerHTML = "<p class='alerta'>Vc não digitou nada!!!</p>";
        return;
    } else if (!regex.test(campoPesquisa)) {
        // Exibe uma mensagem de erro se a entrada contiver caracteres inválidos
        section.innerHTML = "<p class='alerta'>Digite apenas letras.</p>";
        return;
    } else {
        // Itera sobre cada dado na lista de dados
        for (let dado of dados) {
            // Função auxiliar para remover acentos de uma string
            function removerAcentos(str) {
                return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            };

            // Verifica se o título do dado começa com a letra pesquisada (ignorando acentos e case-sensitive)
            if (removerAcentos(dado.titulo.toLowerCase()).startsWith(removerAcentos(campoPesquisa.toLowerCase()))) {
                // Adiciona um novo elemento HTML com os detalhes do dado aos resultados
                resultados += `
                <div class="item-resultado">
                    <h3>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h3>
                    <p class="descricao-meta">Especialidades: ${dado.descricao}</p>
                    <p class="descricao-meta">Tempo de Profissão: ${dado.temponapista}</p>
                    <p class="descricao-meta">Idade: ${dado.idade}</p>
                    <a href="${dado.celular}" target="_blank" class="descricao-meta">Clique aqui para entrar em contato comigo.</a>
                </div>
                `; 
            };
        };

        if (!resultados) {
            section.innerHTML = "<p class='alerta'>O que você digitou não foi encontrado!!!</p>";
            return;
        };

        // Exibe os resultados da pesquisa na seção HTML
        section.innerHTML = resultados;
    };
};

// estudar o codigo abaixo

// Obtém o elemento de input e o botão
const campoPesquisa = document.getElementById("campo-pesquisa");
const botaoPesquisar = document.getElementById("botao-pesquisar"); // Substitua pelo ID do seu botão

// Adiciona um ouvinte de eventos ao campo de pesquisa
campoPesquisa.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        pesquisar();
    }
});

// Adiciona um ouvinte de eventos ao botão (opcional, se você quiser manter o clique)
botaoPesquisar.addEventListener('click', pesquisar);

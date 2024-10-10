function pesquisar() {

    // Obtém o valor digitado pelo usuário no campo de pesquisa e armazena em uma variável.
    const campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // Seleciona a seção HTML onde os resultados serão exibidos.
    const section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";

    // Cria uma expressão regular para validar se a entrada contém apenas letras.
    const regex = /[-a-zA-Z0-9]+/;
    //const regex = /^[a-zA-Z0-9]{3,}$/;

    // Verifica se o campo de pesquisa está vazio.
    if (campoPesquisa.trim() === "") {
        // Se estiver vazio, exibe uma mensagem de erro informando o usuário.
        Swal.fire({
            title: 'Ops!!!',
            text: 'Vc não digitou nada!!!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        //console.log('teste');
    } else if (!regex.test(campoPesquisa)) {
        // Se a entrada contiver caracteres inválidos na variável regex, exibe uma mensagem de erro.
        Swal.fire({
            title: 'Ops!!!',
            text: 'Digite apenas letras. Números e caracteres especias não serão encontrados.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    } else {
        // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos).
        for (let dado of dados) {
            // Função auxiliar para remover acentos de uma string, permitindo uma comparação mais precisa.
            // A normalização 'NFD' decompõe os caracteres com acentos em suas partes base e diacríticos.
            // A expressão regular remove os diacríticos.
            function removerAcentos(str) {
                return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            };

            if (removerAcentos(campoPesquisa.toLowerCase()).length >= 3 && removerAcentos(dado.descricao.toLowerCase()).includes(removerAcentos(campoPesquisa.toLowerCase()))) {
                // Se a pesquisa corresponder, cria um novo elemento HTML para exibir os resultados.
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
                // Se o usuário digitou pelo menos 3 caracteres e a pesquisa encontrou um resultado, execute o código
                console.log('Pesquisa encontrada!');
            } else if (!resultados) {
                // Se o usuário digitou menos de 3 caracteres ou não encontrou resultados, execute outro código
                Swal.fire({
                    title: 'Ops!!!',
                    text: 'Digite pelo menos 3 letras!!!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                // Se o usuário não digitou pelo menos 3 caracteres da ruim
                console.log('Digite pelo menos 3 letras!!!');
            };
            
            
            // // Verifica se o título do dado começa com a letra pesquisada, ignorando acentos e caixa alta/baixa.
            // if (removerAcentos(dado.descricao.toLowerCase()).includes(removerAcentos(campoPesquisa.toLowerCase()))) {
            // 
            //     // Se a pesquisa corresponder, cria um novo elemento HTML para exibir os resultados.
            //     resultados += `
            //     <div class="item-resultado">
            //         <h3>
            //             <a href="#" target="_blank">${dado.titulo}</a>
            //         </h3>
            //         <p class="descricao-meta">Especialidades: ${dado.descricao}</p>
            //         <p class="descricao-meta">Tempo de Profissão: ${dado.temponapista}</p>
            //         <p class="descricao-meta">Idade: ${dado.idade}</p>
            //         <a href="${dado.celular}" target="_blank" class="descricao-meta">Clique aqui para entrar em contato comigo.</a>
            //     </div>
            //     `; 
            // };
        };

        // Se nenhum resultado foi encontrado, exibe uma mensagem informando o usuário.
        // if (!resultados) {
        //     Swal.fire({
        //         title: 'Ops!!!',
        //         text: 'A profissão/função digitada não foi encontrada!!!',
        //         icon: 'error',
        //         confirmButtonText: 'OK'
        //     });
        // };


        // Exibe os resultados da pesquisa na seção HTML.
        section.innerHTML = resultados;
    };
};

// estudar o codigo abaixo

// Obtém o elemento de input e o botão
const campoPesquisa = document.getElementById("campo-pesquisa");
const botaoPesquisar = document.getElementById("botao-pesquisar"); // Substitua pelo ID do seu botão

// Adiciona um ouvinte de eventos ao campo de pesquisa
campoPesquisa.addEventListener('keydown', (event) => {
    if (event.keyCode === 30) {
        console.log('teste');
        pesquisar();
    }
});

// Adiciona um ouvinte de eventos ao botão (opcional, se você quiser manter o clique)
botaoPesquisar.addEventListener('click', pesquisar);

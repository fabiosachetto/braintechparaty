// Este script JavaScript gerencia o processo de login de um usuário.
// Ao enviar o formulário, o script verifica as credenciais do usuário encontrado em uma lista de usuários simulados. 
// Se as credenciais forem válidas, o nome do usuário é armazenado no localStorage e o usuário é redirecionado
// para a página "logado.html".

const formLogin = document.getElementById("form-login");

// Obtém o elemento span e atualiza o conteúdo
const nomeUsuarioExibido = document.getElementById("nome-usuario-exibido");

formLogin.addEventListener("submit", (event) => {
    // Impede o envio padrão do formulário, permitindo o controle personalizado.
    event.preventDefault(); 

    // Obtém os valores do email e senha digitados pelo usuário.
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Array de objetos representando os usuários registrados (simulado).
    const usuarios = [
        { email: "fabio@teste.com.br", senha: "palmeiras", nomeUsuarioExibido: "Fábio Verdi" },
        { email: "renan@teste.com.br", senha: "flamengo", nomeUsuarioExibido: "Renan" },
        { email: "thiago@teste.com.br", senha: "thiagomentor", nomeUsuarioExibido: "Thiago Mentor" },
        { email: "rick@teste.com.br", senha: "quintaavenida", nomeUsuarioExibido: "Rick" },
        { email: "gabriel@teste.com.br", senha: "gabrielmentor", nomeUsuarioExibido: "Grabriel Mentor" },
        { email: "serginho@teste.com.br", senha: "sergioyakissoba", nomeUsuarioExibido: "Serginho" },
        { email: "fabianojsantana@teste.com.br", senha:"fabiojsantana", nomeUsuarioExibido: "Fabiano J. Santana"}
    ];

    // Inicializa uma variável para armazenar o nome do usuário encontrado, se houver.
    let nomeUsuarioEncontrado = null;

    // Itera sobre cada usuário na lista para verificar as credenciais.
    usuarios.forEach(usuario => {
        if (usuario.email === email && usuario.senha === senha) {
            // Se as credenciais corresponderem, armazena o nome do usuário.    
            nomeUsuarioEncontrado = usuario.nomeUsuarioExibido;
        }
    });

    if (nomeUsuarioEncontrado) {
        // Se o usuário foi encontrado, armazena o nome no localStorage.
        localStorage.setItem("nomeUsuario", nomeUsuarioEncontrado);

        // Redireciona o usuário para a página de sucesso.
        window.location.href = "logado.html";
    } else {
        // Se as credenciais forem inválidas, exibe uma mensagem de erro.
        //alert("E-mail ou senha inválidos.");

        Swal.fire({
            title: 'Algo deu errado!',
            text: 'Confira se seu e-mail ou sua senha estão corretos.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    };
});


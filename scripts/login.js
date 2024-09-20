const formLogin = document.getElementById("form-login");

// Obtém o elemento span e atualiza o conteúdo
const nomeUsuarioExibido = document.getElementById("nome-usuario-exibido");

formLogin.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Simulando um banco de dados (substitua por sua lógica de verificação)
    const usuarios = [
        { 
            email: "fabio@teste.com.br", senha: "123", nomeUsuarioExibido: "Fábio Verdi"
        },
        { 
            email: "rodrigo@teste.com.br", senha: "corinthians", nomeUsuarioExibido: "Rodrigo"
        },
        { 
            email: "caue@teste.com.br", senha: "casapizza", nomeUsuarioExibido: "Cauê"
        },
        { 
            email: "rick@teste.com.br", senha: "quintaavenida", nomeUsuarioExibido: "Rick"
        }
    ];

    let nomeUsuarioEncontrado = null;

    usuarios.forEach(usuario => {
        if (usuario.email === email && usuario.senha === senha) {
            nomeUsuarioEncontrado = usuario.nomeUsuarioExibido;
        }
    });

    if (nomeUsuarioEncontrado) {
        // Armazena o nome do usuário no localStorage
        localStorage.setItem("nomeUsuario", nomeUsuarioEncontrado);

        // Redireciona para a página principal
        window.location.href = "logado.html";
    } else {
        // Exibe uma mensagem de erro
        alert("Email ou senha inválidos.");
    };
});

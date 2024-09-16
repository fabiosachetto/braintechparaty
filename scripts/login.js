const formLogin = document.getElementById("form-login");

formLogin.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Simulando um banco de dados (substitua por sua lógica de verificação)
    const usuarios = [
        { 
            email: "fabio@teste.com.br", senha: "palmeiras"
        },
        { 
            email: "rodrigo@teste.com.br", senha: "corinthians"
        },
        { 
            email: "caue@teste.com.br", senha: "casapizza"
        }
    ];

    let usuarioEncontrado = false;
    usuarios.forEach(usuario => {
        if (usuario.email === email && usuario.senha === senha) {
            usuarioEncontrado = true;
        }
    });

    if (usuarioEncontrado) {
        // Redireciona para a página restrita
        window.location.href = "logado.html";
    } else {
        // Exibe uma mensagem de erro
        alert("Email ou senha inválidos.");
    }
});

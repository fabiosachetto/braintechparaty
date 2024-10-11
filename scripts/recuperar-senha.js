const form = document.getElementById("form-login");
const emailInput = document.getElementById("email");

// Array de objetos representando os usuários registrados (simulado).
const usuarios = [
  { email: "fabio@teste.com.br", senha: "palmeiras", nomeUsuarioExibido: "Fábio Verdi" },
  { email: "thiago@teste.com.br", senha: "thiagomentor", nomeUsuarioExibido: "Thiago Mentor" },
  { email: "rick@teste.com.br", senha: "quintaavenida", nomeUsuarioExibido: "Rick" },
  { email: "gabriel@teste.com.br", senha: "gabrielmentor", nomeUsuarioExibido: "Grabriel Mentor" },
  { email: "serginho@teste.com.br", senha: "sergioyakissoba", nomeUsuarioExibido: "Serginho" },
  { email: "fabianojsantana@teste.com.br", senha: "fabiano", nomeUsuarioExibido: "Fabiano J. Santana"}
];


// Função para verificar se o email existe no array de usuários
function emailExiste(email) {
  return usuarios.some(usuario => usuario.email === email);
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário

  const email = emailInput.value;

  if (!emailExiste(email)) {
    // alert("O e-mail informado não está cadastrado.");
    Swal.fire({
      title: 'Ops!',
      text: 'O e-mail informado não está cadastrado.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return;
  }

  sendEmail(email);

  function sendEmail(email) {
    // armazenando email digitado para conferir
    localStorage.setItem("EMAIL DIGITADO E ENCONTRADO NO BANCO FAKE.", email);
    
    // alert("E-mail enviado para recuperação de senha! (Simulação). Você será redirecionado para a página de Login!"); 
    
    // Mensagem de simulação
    Swal.fire({
      title: 'Boa!',
      text: 'E-mail enviado para recuperação de senha! (Simulação).',
      icon: 'success',
      confirmButtonText: '<a href="index.html">Clique aqui e volte para a página de inicial.</a>'
    });
  }

  form.reset(); // Limpa o formulário após o envio simulado
});

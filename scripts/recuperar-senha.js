const form = document.getElementById("form-login");
const emailInput = document.getElementById("email");

function sendEmail(email) {
  // armazenando email digitado para conferir
  localStorage.setItem("EMAIL DIGITADO E ENCONTRADO NO BANCO FAKE.", email);
  
  // alert("E-mail enviado para recuperação de senha! (Simulação). Você será redirecionado para a página de Login!"); 

  // Mensagem de simulação
  Swal.fire({
    title: 'Boa!',
    text: 'E-mail enviado para recuperação de senha! (Simulação). Você será redirecionado para a página de Login!',
    icon: 'success',
    confirmButtonText: 'OK'
  });

  // Redireciona o usuário para a página de sucesso.
  window.location.href = "index.html";
}

// Array de objetos representando os usuários registrados (simulado).
const usuarios = [
  { email: "fabio@teste.com.br", senha: "palmeiras", nomeUsuarioExibido: "Fábio Verdi" },
  { email: "renan@teste.com.br", senha: "flamengo", nomeUsuarioExibido: "Renan" },
  { email: "thiago@teste.com.br", senha: "thiagomentor", nomeUsuarioExibido: "Thiago Mentor" },
  { email: "rick@teste.com.br", senha: "quintaavenida", nomeUsuarioExibido: "Rick" },
  { email: "gabriel@teste.com.br", senha: "gabrielmentor", nomeUsuarioExibido: "Grabriel Mentor" }
]

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
  } else if (!validateEmail(email)) {
    // alert("O formato do e-mail é inválido.");
    Swal.fire({
      title: 'Ops!',
      text: 'O formato do e-mail é inválido.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
    console.log('aeeeeeeeee');
    return;
  };

  sendEmail(email);
  form.reset(); // Limpa o formulário após o envio simulado
});

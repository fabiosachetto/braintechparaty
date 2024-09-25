const form = document.getElementById("form-login");
const emailInput = document.getElementById("email");

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function sendEmail(email) {
  // Simulação de envio de email
  console.log(`Enviando e-mail para recuperação de senha: ${email}`);
  alert("E-mail enviado para recuperação de senha! (Simulação)"); // Mensagem de simulação
}

// Array de objetos representando os usuários registrados (simulado).
const usuarios = [
  { email: "fabio@teste.com.br", senha: "123", nomeUsuarioExibido: "Fábio Verdi" },
  { email: "rodrigo@teste.com.br", senha: "corinthians", nomeUsuarioExibido: "Rodrigo" },
  { email: "caue@teste.com.br", senha: "casapizza", nomeUsuarioExibido: "Cauê" },
  { email: "rick@teste.com.br", senha: "quintaavenida", nomeUsuarioExibido: "Rick" },
  { email: "lucao@teste.com.br", senha: "12345", nomeUsuarioExibido: "Lucão" },
  { email: "saulao@teste.com.br", senha: "12345", nomeUsuarioExibido: "Saulo" },
  { email: "davi@teste.com.br", senha: "12345", nomeUsuarioExibido: "Davi Dona Ká" },
  { email: "fabio@sachetto.com.br", senha: "beatriz@2012", nomeUsuarioExibido: "Fábio Sachetto" }
]

// Função para verificar se o email existe no array de usuários
function emailExiste(email) {
  return usuarios.some(usuario => usuario.email === email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário

  const email = emailInput.value;

  if (!emailExiste(email)) {
    alert("O e-mail informado não está cadastrado.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Por favor, digite um e-mail válido!");
    return;
  }

  sendEmail(email);
  form.reset(); // Limpa o formulário após o envio simulado
});

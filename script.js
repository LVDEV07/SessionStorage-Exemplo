const inputNome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');

document.getElementById('btnSalvar').addEventListener('click', function () {
  const nome = inputNome.value;
  sessionStorage.setItem('nome', nome);
  mensagem.textContent = 'Nome salvo: ' + nome;
});

document.getElementById('btnRecuperar').addEventListener('click', function () {
  const nome = sessionStorage.getItem('nome');
  if (nome) {
    mensagem.textContent = 'Nome recuperado: ' + nome;
  } else {
    mensagem.textContent = 'Nenhum nome salvo.';
  }
});

document.getElementById('btnRemover').addEventListener('click', function () {
  sessionStorage.removeItem('nome');
  inputNome.value = '';
  mensagem.textContent = 'Nome removido.';
});

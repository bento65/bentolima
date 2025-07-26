function verificarSenha() {
  const senhaCorreta = "365"; // Sua senha aqui
  const senhaDigitada = document.getElementById("senha").value;
  const erro = document.getElementById("erro");
  const btnTocar = document.getElementById("btnTocarMusica");
  const musica = document.getElementById("musicaFundo");

  if (senhaDigitada === senhaCorreta) {
    document.getElementById("tela-senha").style.display = "none";
    document.getElementById("tela-principal").style.display = "block";

    musica
      .play()
      .then(() => {
        erro.textContent = "";
        btnTocar.style.display = "none"; // Esconde botão se a música tocar
      })
      .catch(() => {
        erro.textContent = "Música bloqueada. Clique no botão para liberar.";
        btnTocar.style.display = "inline-block"; // Mostra botão para liberar som
      });
  } else {
    erro.textContent = "Senha incorreta. Tente novamente.";
  }
}

function mostrarMensagem() {
  document.getElementById("mensagemExtra").style.display = "block";
}

function tocarMusicaManual() {
  const musica = document.getElementById("musicaFundo");
  const erro = document.getElementById("erro");
  const btnTocar = document.getElementById("btnTocarMusica");

  musica
    .play()
    .then(() => {
      erro.textContent = "";
      btnTocar.style.display = "none";
    })
    .catch(() => {
      erro.textContent =
        "Ainda não foi possível tocar a música. Por favor, tente novamente.";
    });
}
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 300);

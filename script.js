function verificarSenha() {
    const senhaCorreta = "60"; 
    const senhaDigitada = document.getElementById("senha").value;
    const erro = document.getElementById("erro");
    const musica = document.getElementById("musicaFundo");

    if (senhaDigitada === senhaCorreta) {
        document.getElementById("tela-senha").style.fadeOut; // Adiciona efeito de sumir
        document.getElementById("tela-senha").style.display = "none";
        document.getElementById("tela-principal").style.display = "flex";

        // Inicia os corações
        setInterval(createHeart, 300);

        musica.play().catch(() => {
            document.getElementById("btnTocarMusica").style.display = "inline-block";
        });
    } else {
        erro.textContent = "Humm... tente pensar com o coração! ❤️";
        erro.style.color = "#ff8fa3";
    }
}

function mostrarMensagem() {
    const msg = document.getElementById("mensagemExtra");
    msg.style.display = "block";
    window.scrollTo(0, document.body.scrollHeight);
}

function tocarMusicaManual() {
    const musica = document.getElementById("musicaFundo");
    musica.play();
    document.getElementById("btnTocarMusica").style.display = "none";
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.opacity = Math.random();
    
    document.getElementById("hearts").appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function verificarSenha() {
    const senhaCorreta = "60"; 
    const senhaDigitada = document.getElementById("senha").value;
    const erro = document.getElementById("erro");
    const musica = document.getElementById("musicaFundo");
    const telaSenha = document.getElementById("tela-senha");
    const telaPrincipal = document.getElementById("tela-principal");

    if (senhaDigitada === senhaCorreta) {
        // 1. Tentar tocar a música imediatamente
        musica.play().then(() => {
            console.log("Música tocando!");
        }).catch((e) => {
            console.log("Autoplay bloqueado, mostrando botão manual.");
            document.getElementById("btnTocarMusica").style.display = "inline-block";
        });

        // 2. Trocar as telas
        telaSenha.style.display = "none";
        telaPrincipal.style.display = "flex";

        // 3. Iniciar corações
        setInterval(createHeart, 300);
        
    } else {
        erro.textContent = "Humm... tente pensar com o coração! ❤️";
        erro.style.color = "#ff8fa3";
    }
}

function mostrarMensagem() {
    const msg = document.getElementById("mensagemExtra");
    msg.style.display = "block";
    // Pequeno atraso para o scroll funcionar após o elemento aparecer
    setTimeout(() => {
        msg.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function tocarMusicaManual() {
    const musica = document.getElementById("musicaFundo");
    musica.play();
    document.getElementById("btnTocarMusica").style.display = "none";
}

function createHeart() {
    const container = document.getElementById("hearts");
    if (!container) return;

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

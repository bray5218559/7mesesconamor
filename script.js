function mensaje() {
    const mensajes = [
        "💖 Gracias por estos 7 meses tan lindos",
        "😊 Me encanta verte sonreír",
        "🌈 Contigo todo se siente más bonito",
        "💕 Gracias por ser tú, chaparrita bonita"
    ];
    const random = Math.floor(Math.random() * mensajes.length);
    document.getElementById("extra").innerHTML = mensajes[random];
}

function corazones() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

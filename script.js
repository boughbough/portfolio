function login(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 🔐 Définis ici le mot de passe (exemple : "1234")
    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        window.location.href = "index.html";  // Redirige vers la page principale
    } else {
        document.getElementById("error-message").textContent = "Identifiants incorrects.";
    }

    return false;
}

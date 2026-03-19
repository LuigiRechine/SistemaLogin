const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", () => {
    const emailDigitado = document.getElementById("email").value;
    const senhaDigitada = document.getElementById("senha").value;

    const emailSalvo = localStorage.getItem("email");
    const senhaSalva = localStorage.getItem("senha");

    if (emailDigitado === emailSalvo && senhaDigitada === senhaSalva) {
        alert("Login realizado com sucesso!");
        window.location.href = "../pages/dashboard.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
});
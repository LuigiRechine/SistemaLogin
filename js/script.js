const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const user = document.getElementById("user");

    localStorage.setItem("nome", nome.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("senha", senha.value);
    localStorage.setItem("usuario", user.value);

    alert("Cadastro realizado com sucesso!");

    window.location.href = "pages/login.html";
});
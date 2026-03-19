
const nomeSalvo = localStorage.getItem("nome");
const papelSalvo = localStorage.getItem("usuario");

const nomeNav = document.getElementById("nomeNav");
const papelNav = document.getElementById("papelNav");
const papelCard = document.getElementById("papelCard");
const mensagemBoasVindas = document.getElementById("mensagemBoasVindas");
const iniciaisDiv = document.getElementById("iniciais");

nomeNav.textContent = nomeSalvo;
mensagemBoasVindas.textContent = `Seja bem vindo(a), ${nomeSalvo}!`;

iniciaisDiv.textContent = nomeSalvo.charAt(0).toUpperCase();

const papelTexto = papelSalvo === "adm" ? "Administrador" : "Usuário";
    
papelNav.textContent = papelTexto;
papelCard.textContent = papelTexto;

document.getElementById("btnSair").addEventListener("click", () => {
    window.location.href = "../pages/login.html";
});
# 🚀 Sistema de Cadastro e Login (LocalStorage)

Este é um projeto de sistema de autenticação simplificado desenvolvido para praticar a manipulação de dados no navegador utilizando **JavaScript** e **LocalStorage**. O sistema permite o cadastro de usuários, validação de login e uma área restrita (Dashboard) com dados dinâmicos.

## 🔗 Demonstração
Você pode acessar o projeto online aqui: [LINK-DO-SEU-REPOSITORIO.github.io](https://LuigiRechine.github.io/sistemaLogin/)

---

## 🛠️ Tecnologias Utilizadas

* **HTML5**: Estruturação das páginas.
* **CSS3 (Bootstrap 5)**: Estilização e layout responsivo.
* **JavaScript (ES6+)**: Lógica de captura, armazenamento e validação de dados.
* **LocalStorage**: Persistência de dados diretamente no navegador.

---

## ⚙️ Funcionalidades

- [x] **Cadastro de Usuários**: Salva Nome, E-mail, Senha e Tipo de Usuário (ADM/Comum).
- [x] **Validação de Login**: Compara os dados digitados com os registros no LocalStorage.
- [x] **Dashboard Dinâmico**: 
    - Exibe mensagem personalizada: `Seja bem vindo(a), {Nome}`.
    - Identifica o nível de acesso (Administrador ou Usuário).
    - Gera iniciais do perfil automaticamente.
- [x] **Logout**: Sistema de saída com redirecionamento.

---

## 📁 Estrutura de Arquivos

```text
├── index.html          # Página de Cadastro
├── pages/
│   ├── login.html      # Página de Login
│   └── dashboard.html  # Painel do Usuário
├── js/
│   ├── script.js       # Lógica de Cadastro
│   ├── login.js        # Lógica de Autenticação
│   └── dashboard.js    # Lógica de Exibição Dinâmica
└── css/
    ├── login.css       # Estilizações de Longin
    ├── dashboard.css   # Estilizações de Painel do Usuário
    └── style.css       # Estilizações de Cadastro

[![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)](https://github.com/mateus-lopes/aceWebFrontend)
# AceStore

**AceStore** é um projeto elegante de e-commerce desenvolvido para a empresa fictícia ACE Store. Este Frontend é construído com tecnologias modernas, incluindo Vue 3, Tailwind CSS, Swiper, proporcionando uma experiência excepcional aos usuários.

## Visão Geral

**aceWebFrontend** é a interface principal do ACE Store, uma plataforma de compra online. O objetivo é criar uma aplicação responsiva, visualmente atraente e altamente funcional que atenda às necessidades dos clientes, promovendo uma interação intuitiva e uma navegação fácil.

### Principais Recursos

- **Vue 3:** Utilizamos a poderosa framework Vue.js para criar uma interface dinâmica e responsiva, proporcionando uma experiência de usuário excepcional.
- **Vue Router:** Utilizamos o Vue Router para facilitar a navegação dentro da aplicação, garantindo uma experiência de usuário mais fluida e organizada.
- **Pinia:** Adotamos o Pinia para o gerenciamento do estado da aplicação, proporcionando um fluxo de dados eficiente e reativo.
- **Tailwind CSS:** Este framework CSS nos permite estilizar de forma eficaz, tornando o design moderno e altamente customizável.
- **Swiper:** Implementamos o Swiper para proporcionar uma experiência de carrossel suave e interativa para a visualização dos produtos.
- **Axios:** Utilizamos Axios para facilitar as requisições HTTP, garantindo uma comunicação fluida entre o frontend e o backend.

## Configuração da IDE Recomendada

Para garantir uma experiência de desenvolvimento otimizada, recomendamos a configuração da seguinte IDE:

- **IDE:** [VSCode](https://code.visualstudio.com/)
- **Extensões:**
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (desativando o Vetur)
  - [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

Essa configuração garantirá uma produtividade aprimorada durante o desenvolvimento.

## Configuração do Projeto

Para começar, siga os passos abaixo:

1. **Clone o Repositório:**
   Clone o repositório para o seu ambiente local:
   ```sh
   git clone https://github.com/seu-usuario/aceWebFrontend.git
   cd aceWebFrontend

2. **Instalar as Dependências:**
   Instale as dependências do projeto:
   ```sh
   npm install

3. **Configurar Vue Router, Pinia e Axios:**

   No arquivo `main.js`, adicione as seguintes linhas para configurar o Vue Router, Pinia e Axios:

   ```javascript
   import { createApp } from 'vue';
   import App from './App.vue';
   import router from './router'; // Importe o Vue Router
   import { createPinia } from 'pinia'; // Importe o Pinia
   import axios from 'axios'; // Importe o Axios

   const app = createApp(App);
   app.use(router); // Use o Vue Router
   app.use(createPinia()); // Use o Pinia
   app.config.globalProperties.$axios = axios; // Configure o Axios
   app.mount('#app');

Agora o projeto está configurado e pronto para ser executado e desenvolvido!

# Rick and Morty App - Documentação

O Rick and Morty App é uma aplicação desenvolvida com React que consome a API pública Rick and Morty API para exibir informações sobre os personagens da série. O aplicativo possui um formulário de busca que permite pesquisar personagens pelo nome e exibe as informações em cards interativos. A interface foi estilizada utilizando TailwindCSS para garantir uma aparência moderna e responsiva.

## Estrutura do Projeto
1. **node_modules**: Aqui se encontram as dependências do projeto
2. **public**: Arquivos estáticos públicos
3. **src**: Código fonte do projeto
    - ***__tests__***: Arquivo de testes unitários
    - ***components***: Componentes reutilizáveis
        - ***card***: Componente do card de exibição
        - ***form***: Componente do formulário
        - ***services***: Serviço que consome a API
    - ***App.jsx***: Componente principal do react
**index.js**: Ponto de entrada do react
**index.css**: Arquivo principal do css
4. **babelrc**: Arquivo de configuração para o babel
5. **package.json**: Dependência e scripts do projeto
6. **tailwind.config.js**: Configuração do TailwindCSS

# Configuração e Execução Local
1. **Pré-Requisitos**: `NodeJS` e `npm`
2. **Clonar o repositório**
    ```bash
    git clone https://github.com/MarcoJunkes/rick-and-morty-app.git
    cd rick-and-morty-app
3. **Instalar as dependências**
    ```bash
    npm install
4. **Executar a aplicação**
    ```bash
    npm start

# Informações sobre a API
A aplicação consome dados da Rick and Morty API, uma API RESTful pública que fornece informações detalhadas sobre os personagens, locais e episódios da série.
1. **Endpoint utilizado**: `https://rickandmortyapi.com/api/character/`
2. **Exemplo de chamada**:
    ```bash
    const url = `https://rickandmortyapi.com/api/character/?name=${nome}`;
    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();
**Parâmetros**: 
    `name`: nome do personagem para busca
O retorno é um JSON com uma lista de personagens que correspondem ao nome buscado, incluindo informações como nome, status, espécie, gênero e imagem.

# Executar os testes
1. **Rodar os testes**
    ```bash
    npm test
2. **Estrutura dos testes**
Os testes estão localizados no diretório `src/__tests__` e cobrem funcionalidades básicas dos componentes, como renderização correta de elementos, interações com o usuário e comportamento esperado ao submeter formulários.
# Site de Gerenciamento de Informações - The Painscreek Killings

## Introdução
Este projeto é um site desenvolvido utilizando Next.js, cujo objetivo é gerenciar informações coletadas pelos jogadores do jogo The Painscreek Killings. O site permite que os usuários criem contas, façam login e organizem dados sobre personagens, locais e acontecimentos do jogo.

## Objetivos do Sistema
- Auxiliar jogadores na organização das informações coletadas durante o jogo.
- Permitir a criação e gerenciamento de contas de usuário.
- Fornecer uma interface para adicionar, editar e buscar dados de personagens, locais e acontecimentos.
- Implementar um sistema de busca com ranqueamento dos resultados.

## Requisitos Funcionais

### Autenticação de Usuário
- **Cadastro de Usuário**
  - O usuário deve ser capaz de se registrar com um e-mail e senha.
  - Dados necessários: nome, e-mail, senha.
  - O e-mail deve ser único no sistema.

- **Login de Usuário**
  - O usuário deve ser capaz de fazer login com seu e-mail e senha.
  - O sistema deve validar as credenciais e fornecer acesso seguro.

- **Logout de Usuário**
  - O usuário deve poder fazer logout do sistema.

### Gestão de Dados
- **Personagem**
  - O usuário deve poder adicionar um novo personagem com os seguintes dados: nome, descrição, imagem (opcional), outros detalhes (textos livres).
  - O usuário deve poder editar e excluir personagens existentes.

- **Local**
  - O usuário deve poder adicionar um novo local com os seguintes dados: nome, descrição, imagem (opcional), outros detalhes (textos livres).
  - O usuário deve poder editar e excluir locais existentes.

- **Acontecimento**
  - O usuário deve poder adicionar um novo acontecimento com os seguintes dados: nome, descrição, data, local (selecionado de locais previamente criados), pessoas envolvidas (selecionadas de personagens previamente criados).
  - O usuário deve poder editar e excluir acontecimentos existentes.

### Sistema de Busca
- **Busca por Palavra**
  - O usuário deve ser capaz de realizar uma busca por palavra-chave que abranja todos os dados: personagens, locais e acontecimentos.
  - O sistema deve exibir os resultados ranqueados por relevância.

### Páginas do Site
- **Página Inicial**
  - Informações sobre o site e links de navegação para login, cadastro e seções de dados.

- **Página de Login**
  - Formulário para entrada de e-mail e senha para autenticação.

- **Página de Cadastro**
  - Formulário para registro de novo usuário.

- **Arquivo de Personagens**
  - Lista de todos os personagens adicionados pelo usuário com opção de adicionar, editar e excluir.

- **Arquivo de Locais**
  - Lista de todos os locais adicionados pelo usuário com opção de adicionar, editar e excluir.

- **Arquivo de Acontecimentos**
  - Lista de todos os acontecimentos adicionados pelo usuário com opção de adicionar, editar e excluir.

- **Página de Busca**
  - Campo de busca e exibição de resultados ranqueados.

## Requisitos Não Funcionais
- **Segurança**
  - Os dados do usuário devem ser armazenados de forma segura com criptografia de senhas.
  - Sessões de usuário devem ser gerenciadas de forma segura.

- **Desempenho**
  - O sistema deve ser capaz de lidar com um número razoável de usuários e dados sem perda de performance significativa.

- **Usabilidade**
  - O site deve ser intuitivo e fácil de usar, com uma interface clara e consistente.
  - Deve ser responsivo e funcionar bem em dispositivos móveis.

- **Tecnologia**
  - O front-end deve ser desenvolvido utilizando Next.js.
  - O back-end pode utilizar tecnologias como Node.js, Express.js, e um banco de dados relacional (por exemplo, PostgreSQL) ou NoSQL (por exemplo, MongoDB).

## Considerações Finais
Este documento apresenta os requisitos iniciais para o desenvolvimento do site. Alterações e adições podem ser necessárias à medida que o desenvolvimento avança e novos requisitos são identificados.

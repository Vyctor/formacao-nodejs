# Arquivos do curso Formação Nodejs

```docker
  // Baixa imagem do mysql
  docker pull mysql
  // Cria um container com a imagem
  docker run --name mysql -e MYSQL_ROOT_PASSWORD=admin -p 3306:3306 -d mysql
  // Executa o bash no container
  docker exec -it mysql bash
```

## Assuntos cobertos pelo curso

- Módulos
  - **Pesquisar** -> module.exports vs export (Commom JS vs ES6)
- Http
  - O que é **HTTP**?
    - É um protocolo de transferência de dados pela internet, através do Hipertexto.
- Express
  - O que é o **Express**?
    - É um framework popularmente utilizado para construção de aplicações back-end.
  - Rotas
    - É o caminho que a requisição percorre para chegar a determinado endpoint, função, da aplicação.
- MySQL
  - Sistema de gerenciamento de banco de dados que utiliza a linguagens SQL, Structured Query Language, como interface.
- Projeto 1: Guia Perguntas
  - Projeto de uma plataforma de perguntas e respostas ao estilo Yahoo Respostas.
- Projeto 2: Criando um blog com painel administrativo
  - Relacionamentos em banco de dados.
    - 1 para 1
    - 1 para N
    - N para N

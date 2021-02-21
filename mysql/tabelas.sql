-- Criando DATABASE e TABELA
CREATE DATABASE sistemaDeCadastro;

CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);

DESC usuarios;

-- INSERT, SELECT E WHERE
INSERT INTO usuarios(nome,email,idade) VALUES(
  "VYCTOR GUIMARÃES",
  "dev.vyctor@gmail.com",
  26
);

INSERT INTO usuarios(nome,email,idade) VALUES(
  "VYCTOR VIEIRA GUIMARÃES",
  "vyctorguimaraes@gmail.com",
  26
);

INSERT INTO usuarios(nome,email,idade) VALUES(
  "SUELI VIEIRA",
  "sueli.vieira@gmail.com",
  53
);

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE idade < 30;

-- Delete

DELETE FROM usuarios WHERE nome = "VYCTOR VIEIRA GUIMARÃES";

-- UPDATE
UPDATE usuarios SET nome = "VYCTOR VIEIRA" WHERE email = "dev.vyctor@gmail.com";
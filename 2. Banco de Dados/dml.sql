-- CRIA TABELA
CREATE TABLE tb_agenda (
	id_agenda INT primary key auto_increment NOT NULL,
    nm_contato VARCHAR(200) NOT NULL,
    ds_telefone VARCHAR(200) NOT NULL,
    ds_email VARCHAR(200) NOT NULL,
    bt_favorito BOOLEAN NOT NULL,
    dt_cadastro DATETIME NOT NULL
);


-- INSERIR NOVO CONTATO
INSERT INTO tb_agenda (nm_contato, ds_telefone, ds_email, bt_favorito, dt_cadastro)
VALUES ('', '', '', '', '');

-- BUSCA TODOS OS CONTATOS
SELECT 
nm_contato Nome_Contato,
ds_telefone Telefone,
ds_email Email,
bt_favorito Favoritado,
dt_cadastro Data_Cadastro
FROM tb_agenda;

-- BUSCA CONTATOS PELO NOME
SELECT 
nm_contato Nome_Contato,
ds_telefone Telefone,
ds_email Email,
bt_favorito Favoritado,
dt_cadastro Data_Cadastro
FROM tb_agenda
WHERE nm_contato LIKE '%a%';

-- BUSCA CONTATOS FAVORITADOS
SELECT 
nm_contato Nome_Contato,
ds_telefone Telefone,
ds_email Email,
bt_favorito Favoritado,
dt_cadastro Data_Cadastro
FROM tb_agenda
WHERE dt_cadastro = true;

-- BUSCA CONTATOS CADASTRADOS EM UM INTERVALO
SELECT
id_agenda Id_Contato,
nm_contato Nome_Contato,
ds_telefone Telefone,
ds_email Email,
bt_favorito Favoritado,
dt_cadastro Data_Cadastro
FROM tb_agenda
WHERE dt_cadastro BETWEEN ? AND ?;

-- ALTERA UM CONTATO
UPDATE tb_agenda
SET
nm_contato = '',
ds_telefone = '',
ds_email = '',
bt_favorito = '',
dt_cadastro =''
WHERE id_agenda = 1;

-- DELETA UM CONTATO
DELETE FROM tb_agenda
WHERE id_agenda = '';
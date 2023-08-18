import {con} from './connect.js';

export async function Inserir(nome, telefone, email, favoritado, datacadastro){
    const comando = `
    INSERT INTO tb_agenda (nm_contato, ds_telefone, ds_email, bt_favorito, dt_cadastro)
    VALUES (?, ?, ?, ?, ?)`
    const [resp] = await con.query(comando, [nome, telefone, email, favoritado, datacadastro])
    return resp;
};

export async function BuscarAll() {
    const comando = `
    SELECT
    id_agenda Id_Contato,
    nm_contato Nome_Contato,
    ds_telefone Telefone,
    ds_email Email,
    bt_favorito Favoritado,
    dt_cadastro Data_Cadastro
    FROM tb_agenda`

    const [resp] = await con.query(comando);
    return resp;
};

export async function BuscarNome(nome) {
    const comando = `
    SELECT 
    nm_contato Nome_Contato,
    ds_telefone Telefone,
    ds_email Email,
    bt_favorito Favoritado,
    dt_cadastro Data_Cadastro
    FROM tb_agenda
    WHERE nm_contato LIKE '%a%'`

    const [resp] = await con.query(comando);
    return resp;
};
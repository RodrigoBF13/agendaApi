import {con} from './connect.js';

export async function Inserir(nome, telefone, email, favoritado){
    const comando = `
    INSERT INTO tb_agenda (nm_contato, ds_telefone, ds_email, bt_favorito, dt_cadastro)
    VALUES (?, ?, ?, ?, Now())`
    const [resp] = await con.query(comando, [nome, telefone, email, favoritado])
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

export async function BuscarCadastro(dt1, dt2) {
    const comando = `
    SELECT
    id_agenda Id_Contato,
    nm_contato Nome_Contato,
    ds_telefone Telefone,
    ds_email Email,
    bt_favorito Favoritado,
    dt_cadastro Data_Cadastro
    FROM tb_agenda
    WHERE dt_cadastro BETWEEN ? AND ?`

    const [resp] = await con.query(comando, [dt1, dt2]);
    return resp;
};

export async function Favoritados() {
    const comando = `
    SELECT 
    id_agenda Id_Contato,
    nm_contato Nome_Contato,
    ds_telefone Telefone,
    ds_email Email,
    bt_favorito Favoritado,
    dt_cadastro Data_Cadastro
    FROM tb_agenda
    WHERE bt_favorito = 1`

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
    WHERE nm_contato LIKE '%${nome}%'`

    const [resp] = await con.query(comando);
    return resp;
};

export async function Deletar(id) {
    const comando = `
    DELETE FROM tb_agenda
    WHERE id_agenda = ?`

    const [resp] = await con.query(comando, [id]);
    return resp;
};

export async function Modificar(nm_contato, ds_telefone, ds_email, bt_favorito, id) {
    const comando = `
    UPDATE tb_agenda
    SET
    nm_contato = ?,
    ds_telefone = ?,
    ds_email = ?,
    bt_favorito = ?
    WHERE id_agenda = ?`

    const [resp] = await con.query(comando, [nm_contato, ds_telefone, ds_email, bt_favorito, id]);
    return resp;
};
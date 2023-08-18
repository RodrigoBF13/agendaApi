import {con} from './connect.js';

export async function Inserir(nome, telefone, email, favoritado, datacadastro){
    const comando = `
    INSERT INTO tb_agenda (nm_contato, ds_telefone, ds_email, bt_favorito, dt_cadastro)
    VALUES (?, ?, ?, ?, ?)`
    const resp = await con.query(comando, [nome, telefone, email, favoritado, datacadastro])
    return resp[0];
};
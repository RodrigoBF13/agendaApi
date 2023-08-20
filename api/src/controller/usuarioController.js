import {Router} from 'express';
import { Inserir, BuscarAll, BuscarNome, Deletar, Modificar, Favoritados, BuscarCadastro } from '../repository/usuarioRepository.js';

const server = Router();

server.get('/ping', (req, resp) => {
    resp.send('pong')
});

server.post('/contato', async (req, resp) => {
    try {
        const {nm_contato, ds_telefone, ds_email, bt_favorito} = req.body;
        const resposta = await Inserir(nm_contato, ds_telefone, ds_email, bt_favorito);
        resp.send("Usuário "+nome+" cadastrado!")
    }
    catch (err) {
        resp.status(200).send({
            erro: "Usuario Adicionado"
        })
    }
});


server.get('/contato', async (req,resp) => {
    try {
        const resposta = await BuscarAll();
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro: "Ocorreu um erro!"
        })
    }
});

server.get('/contato/favoritos', async (req,resp) => {
    try {
        const resposta = await Favoritados();
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro: "Ocorreu um erro!"
        })
    }
});

server.get('/contato/cadastro', async (req,resp) => {
    try {
        const {data1, data2} = req.query
        const resposta = await BuscarCadastro(data1, data2);
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro: "Ocorreu um erro!"
        })
    }
});

server.get('/contato/busca', async (req,resp) => {
    try {
        const nomee = req.query.nome;
        const resposta = await BuscarNome(nomee);
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro: "Ocorreu um erro!"
        })
    }
});

server.put('/contato/:id', async (req,resp) => {
    try {
        const id = req.params.id;
        const {nm_contato, ds_telefone, ds_email, bt_favorito} = req.body;
        const resposta = await Modificar(nm_contato, ds_telefone, ds_email, bt_favorito, id);
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro: "Ocorreu um erro!"
        })
    }
});

server.delete('/contato/:id', async (req,resp) => {
    try {
        const id = req.params.id;
        const resposta = await Deletar(id);
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro: "Ocorreu um erro!"
        })
    }
});


export default server;
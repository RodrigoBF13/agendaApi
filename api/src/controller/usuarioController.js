import {Router} from 'express';
import { Inserir } from '../repository/usuarioRepository.js';

const server = Router();

server.get('/ping', (req, resp) => {
    resp.send('pong')
});

server.post('/contato', async (req, resp) => {
    try {
        const {nome, telefone, email, favoritado, datacadastro} = req.body;
        const resposta = await Inserir(nome, telefone, email, favoritado, datacadastro);
        resp.send("Usuário "+nome+" cadastrado!")
    }
    catch (err) {
        resp.status(400).send({
            erro: "Ocorreu um erro!"
        })
    }
})


export default server;
import React, { useState } from "react";
import styled from 'styled-components';
import axios from 'axios';

const ModeloFormulario = styled.form`
    background: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    width: 420px;
`;

export default function Inicio() {

    const dadosInicio = { nome: "", email: "", senha: "", nascimento: "" };
    const [dados, definirDados] = useState(dadosInicio);

    function Mudar(evento) {
        const valor = evento.target.value;
        const campo = evento.target.name;
        definirDados({ ...dados, [campo]: valor });
    }

    async function Adicionar(evento) {
        evento.preventDefault();
        try {
            await axios.post("http://localhost:4000/", dados);
            definirDados(dadosInicio);
        } catch (erro) {
            console.error("Erro ao enviar dados:", erro);
        }
    }

    return (
        <ModeloFormulario onSubmit={Adicionar}>
            <input
                value={dados.nome}
                onChange={Mudar}
                type='text'
                name="nome"
                placeholder="Nome"
                required
            />
            <input
                value={dados.email}
                onChange={Mudar}
                type='email'
                name="email"
                placeholder="Email@Email.com"
                required
            />
            <input
                value={dados.senha}
                onChange={Mudar}
                type='password'
                name="senha"
                placeholder="******"
                required
            />
            <input
                value={dados.nascimento}
                onChange={Mudar}
                type='date'
                name="nascimento"
                required
            />
            <input type="submit" value="Cadastrar" />
        </ModeloFormulario>
    );
}

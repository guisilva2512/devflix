import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro Categoria</h1>

            <Link to="/" alt="voltar para home">
                Ir para a Home
            </Link>
        </PageDefault >
    );
}

export default CadastroCategoria;
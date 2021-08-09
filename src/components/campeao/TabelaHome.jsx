import React from 'react';

const TabelaHome = ({ listaObjetos }) => {

    return (
        <div>
            <h1>Campeões</h1>
            {listaObjetos.length === 0 && <h1>Sem Campeões</h1>}
            {listaObjetos.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Função</th>
                            <th scope="col">Dificuldade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaObjetos.map(objeto => (
                            <tr key={objeto.id}>
                                <td>{objeto.id}</td>
                                <td>{objeto.nome}</td>
                                <td>{objeto.funcao}</td>
                                <td>{objeto.dificuldade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default TabelaHome;
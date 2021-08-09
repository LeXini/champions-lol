import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Cadastrar extends Component {

    state = {
        objeto: {
            id: this.props.objeto.id,
            nome: this.props.objeto.nome,
            funcao: this.props.objeto.funcao,
            dificuldade: this.props.objeto.dificuldade
        },
        redirecionar: false
    }

    acaoCadastrar = e => {
        e.preventDefault();
        if (this.props.editar) {
            this.props.editar(this.state.objeto);
        } else {
            this.props.inserir(this.state.objeto);
        }
        this.setState({ redirecionar: true });
    }

    render() {
        if (this.state.redirecionar === true) {
            return <Redirect to="/campeoes" />
        }

        return (
            <div style={{ padding: '20px' }}>
                <h2>Edição de Campeão</h2>
                <form id="formulario" onSubmit={this.acaoCadastrar}>
                    <div className="form-group">
                        <label for="txtId">ID</label>
                        <input type="number" className="form-control" id="txtId"                            
                            defaultValue={Number(this.props.sequence)+1}
                            value={this.state.sequence}
                            readOnly/>
                    </div>
                    <div className="form-group">
                        <label for="txtNome">Nome</label>
                        <input type="text" minlength="1" maxlength="30" className="form-control" id="txtNome"
                            placeholder="Informe o nome do Campeão" 
                            defaultValue={this.props.objeto.nome}
                            value={this.state.objeto.nome}
                            required
                            onChange={
                                e => this.setState(
                                    {objeto: {...this.state.objeto, nome : e.target.value}}
                                )
                            }/>
                    </div>   
                    <div className="form-group">
                        <label for="txtFuncao">Função</label>
                        <input type="text" minlength="1" maxlength="15" className="form-control" id="txtFuncao"
                            placeholder="Informe a função do Campeão" 
                            required
                            defaultValue={this.props.objeto.funcao}
                            value={this.state.objeto.funcao}
                            onChange={
                                e => this.setState(
                                    {objeto: {...this.state.objeto, funcao : e.target.value}}
                                )
                            }/>
                    </div>  
                    <div className="form-group">
                        <label for="txtDificuldade">Dificuldade</label>
                        <input type="text" minlength="1" maxlength="10" className="form-control" id="txtDificuldade"
                            placeholder="Informe a Dificuldade do Campeão"
                            required 
                            defaultValue={this.props.objeto.dificuldade}
                            value={this.state.objeto.dificuldade}
                            onChange={
                                e => this.setState(
                                    {objeto: {...this.state.objeto, dificuldade : e.target.value}}
                                )
                            }/>
                    </div>
                    <br/> 
                    <button type="submit" className="btn btn-success">
                            Salvar <i className="bi bi-save"></i>
                    </button>                                                       
                </form>
            </div>
        );
    }

}

export default Cadastrar;

import axios from 'axios';
import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

const ufList = [
	{ key: 'o', text: 'Alagoas', value: 'AL' },
	{ key: 'f', text: 'Paraíba', value: 'PB' },
	{ key: 'm', text: 'Pernambuco', value: 'PE' },
  ]

class FormEntregador extends React.Component {

    state = {
		nome: '',
		cpf: '',
		rg: '',
		dataNascimento: '',
		foneCelular: '',
		foneFixo: '',
		qtdEntregasRealizadas: '',
		valorFrete: '',
		enderecoRua: '',
		enderecoNumero: '',
		enderecoBairro: '',
		enderecoCep: '',
		enderecoCidade: '',
		enderecoEstado: '',
		enderecoComplemento: ''
	}


    salvar = () => {

        let EntregadorRequest = {

            nome: this.state.nome,
            cpf: this.state.cpf,
            rg: this.state.rg,
            dataNascimento: this.state.dataNascimento,
            foneCelular: this.state.foneCelular,
            foneFixo: this.state.foneFixo,
            qtdEntregasRealizadas: this.state.qtdEntregasRealizadas,
            valorFrete: this.state.valorFrete,
            enderecoRua: this.state.enderecoRua,
            enderecoNumero: this.state.enderecoNumero,
            enderecoBairro: this.state.enderecoBairro,
            enderecoCidade: this.state.enderecoCidade,
            enderecoCep: this.state.enderecoCep,
            enderecoCep: this.state.enderecoCep,
            enderecoUf: this.state.enderecoUf,
            enderecoComplemento: this.state.enderecoComplemento,
            ativo: this.state.ativo
        }

        axios.post("http://localhost:8082/api/entregador", EntregadorRequest)
            .then((response) => {
                alert('Entregador cadastrado com sucesso.')
            })
            .catch((error) => {
                alert('Erro ao incluir o um cliente.')
            })
    }

    render() {
        return (
            <div>

                <div style={{ marginTop: '3%' }}>

                    <Container textAlign='justified' >

                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

                        <div style={{ marginTop: '4%' }}>

                            <Form>

                                <Form.Group>

                                    <Form.Input
                                        fluid
                                        label='Nome'
                                        width={8}
                                        value={this.state.nome}
                                        onChange={e => this.setState({ nome: e.target.value })}
                                        required
                                    />

                                    <Form.Input
                                        fluid
                                        label='CPF'
                                        value={this.state.cpf}
                                        required
                                        width={4}>
                                        <InputMask
                                            mask="999.999.999-99" onChange={e => this.setState({ cpf: e.target.value })} />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='RG'
                                        width={4}
                                        value={this.state.rg}
                                        onChange={e => this.setState({ rg: e.target.value })}
                                    />

                                </Form.Group>

                                <Form.Group>

                                    <Form.Input
                                        fluid
                                        label='DT Nascimento'
                                        value={this.state.dataNascimento}
                                        width={3}>
                                        <InputMask mask="99/99/9999" placeholder="Ex: 20/03/1985" 
                                        onChange={e => this.setState({ dataNascimento: e.target.value })} />
                                    </Form.Input>


                                    <Form.Input
                                        fluid
                                        label='Fone Celular'
                                        value={this.state.foneCelular}
                                        required
                                        width={4}>
                                        <InputMask mask="(99) 99999.9999" 
                                        onChange={e => this.setState({ foneCelular: e.target.value })} />
                                    </Form.Input>


                                    <Form.Input
                                        fluid
                                        label='Fone Fixo'
                                        value={this.state.foneFixo}
                                        width={4}>
                                        <InputMask mask="(99) 9999.9999" 
                                        onChange={e => this.setState({ foneFixo: e.target.value })} />
                                    </Form.Input>


                                    <Form.Input
                                        fluid
                                        label='QTD Entregas Realizadas'
                                        value={this.state.qtdEntregasRealizadas}
                                        onChange={e => this.setState({ qtdEntregasRealizadas: e.target.value })}
                                        width={3}
                                    />

                                    <Form.Input
                                        fluid
                                        label='Valor Por Frete'
                                        value={this.state.valorFrete}
                                        onChange={e => this.setState({ valorFrete: e.target.value })}
                                        width={3}
                                    />

                                </Form.Group>

                                <Form.Group>

                                    <Form.Input
                                        fluid
                                        label='Rua'
                                        value={this.state.enderecoRua}
                                        onChange={e => this.setState({ enderecoRua: e.target.value })}
                                        width={13}
                                    />

                                    <Form.Input
                                        fluid
                                        label='Número'
                                        value={this.state.enderecoNumero}
                                        onChange={e => this.setState({ enderecoNumero: e.target.value })}
                                        width={3}
                                    />

                                </Form.Group>

                                <Form.Group>

                                    <Form.Input
                                        fluid
                                        label='Bairro'
                                        value={this.state.enderecoBairro}
                                        onChange={e => this.setState({ enderecoBairro: e.target.value })}
                                        width={7}
                                    />

                                    <Form.Input
                                        fluid
                                        label='Cidade'
                                        value={this.state.enderecoCidade}
                                        onChange={e => this.setState({ enderecoCidade: e.target.value })}
                                        width={7}
                                    />

                                    <Form.Input
                                        fluid
                                        label='CEP'
                                        value={this.state.enderecoCep}
                                        width={2}>
                                        <InputMask mask="99.999-999" 
                                        onChange={e => this.setState({ enderecoCep: e.target.value })} />
                                    </Form.Input>


                                </Form.Group>

                                <Form.Select
									fluid
									label='UF'
									options={ufList}
									placeholder='Selecione'
								/>


                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    value={this.state.enderecoComplemento}
                                    onChange={e => this.setState({ enderecoComplemento: e.target.value })}
                                />

                                <Form.Group inline>

                                    <label>Ativo: </label>

                                    <Form.Radio
                                        name='ativo'
                                        label='Sim'
                                        value={this.state.ativo}
                                        onClick={e => this.setState({ ativo: "Sim" })}
                                        checked={true}
                                    />

                                    <Form.Radio
                                        name='ativo'
                                        label='Não'
                                        value={this.state.ativo}
                                        onClick={e => this.setState({ ativo: "Não" })}
                                    />

                                </Form.Group>

                                <Form.Group widths='equal' style={{ marginTop: '4%' }} className='form--empresa-salvar'>

                                    <Button
                                        type="button"
                                        inverted
                                        circular
                                        icon
                                        labelPosition='left'
                                        color='orange'
                                        onClick={this.listar}
                                    >
                                        <Icon name='reply' />
                                        Voltar
                                    </Button>

                                    <Container textAlign='right'>

                                        <Button
                                            inverted
                                            circular
                                            icon
                                            labelPosition='left'
                                            color='blue'
                                            floated='right'
                                            onClick={this.salvar}
                                        >
                                            <Icon name='save' />
                                            Salvar
                                        </Button>

                                    </Container>

                                </Form.Group>

                            </Form>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default FormEntregador;
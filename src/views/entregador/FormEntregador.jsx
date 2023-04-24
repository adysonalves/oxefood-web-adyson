import axios from 'axios';
import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormEntregador extends React.Component {
    state = {

		nome: null,
		cpf: null,
        rg: null,
		dataNascimento: null,
		foneCelular: null,
		foneFixo: null,
        qtdEntregasRealizadas: null,
        valorFrete: null,
        enderecoRua: null,
        enderecoNumero: null,
        enderecoBairro: null,
        enderecoCidade: null,
        enderecoCep: null,
        enderecoUf: null,
        enderecoComplemento: null,
        ativo: false

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
	
		axios.post("http://localhost:8082/api/cliente", EntregadorRequest)
		.then((response) => {
			console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um cliente.')
		})
	}

    render() {
        return (
            <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Nome'
                                    width={8}
                                    required
                                />

                                <Form.Input
                                    fluid
                                    label='CPF'
                                    required
                                    width={4}>
                                        <InputMask 
                                            mask="999.999.999-99"/>
                                    </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'
                                    width={4}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={3}>
                                        <InputMask mask="99/99/9999" placeholder="Ex: 20/03/1985"/>
                                </Form.Input>
                                

                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    required
                                    width={4}>
                                        <InputMask mask="(99) 99999.9999"/>
                                </Form.Input>
                                

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={4}>
                                        <InputMask mask="(99) 9999.9999"/>
                                    </Form.Input>
                                

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={3}
                                />

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={3}
                                />
                                
                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={13}
                                />

                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={3}
                                />

                            </Form.Group>

                                <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={7}
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={7}
                                />

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={2}>
                                        <InputMask mask="99.999-9999"/>
                                    </Form.Input>
                                

                            </Form.Group>
                            
                            <Form.Input
                                fluid
                                label='UF'
                            />


                            <Form.Input
                                fluid
                                label='Complemento'
                            />

                            <Form.Group inline>

                                <label>Ativo: </label>

                                <Form.Radio
                                    label='Sim'
                                    value='Sim'
                                    checked={true}
                                />
                                
                                <Form.Radio
                                    label='Não'
                                    value='Não'
                                />

                            </Form.Group>
                            
                            <Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

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
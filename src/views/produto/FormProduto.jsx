import axios from 'axios';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';


function FormCliente() {

    const [codigo, setCodigo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valorUnitario, setValorUnitario] = useState("");
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState("");
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState("");

    

    function salvar(){

        let ProdutoRequest = {

            codigo: codigo,
            titulo: titulo,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoEntregaMinimo: tempoEntregaMinimo,
            tempoEntregaMaximo: tempoEntregaMaximo
        }

        axios.post("http://localhost:8082/api/produto", ProdutoRequest)
            .then((response) => {
                console.log('Produto cadastrado com sucesso.')
            })
            .catch((error) => {
                console.log('Erro ao incluir o um Produto.')
            })
    }

    
        return (
            <div>

                <div style={{ marginTop: '3%' }}>

                    <Container textAlign='justified' >

                        <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

                        <div style={{ marginTop: '4%' }}>

                            <Form>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        required
                                        fluid
                                        label='Título'
                                        maxLength="100"
                                        value={titulo}
                                        onChange={e => this.setState({ titulo: e.target.value })}
                                    />

                                    <Form.Input
                                        required
                                        fluid
                                        label='Código do Produto'
                                        value={codigo}
                                        onChange={e => this.setState({ codigo: e.target.value })}

                                    >
                                    </Form.Input>

                                </Form.Group>



                                <TextArea
                                    label='Descrição'
                                    placeholder='Informe a descrição do produto'
                                    value={descricao}
                                    onChange={e => this.setState({ descricao: e.target.value })}

                                />

                                <div style={{ marginBottom: '1%' }}></div>

                                <Form.Group widths='equal' >

                                    <Form.Input
                                        required
                                        fluid
                                        label='Valor Unitário'
                                        maxLength="100"
                                        value={valorUnitario}
                                        onChange={e => this.setState({ valorUnitario: e.target.value })}
                                    />

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'
                                        value={tempoEntregaMinimo}
                                        onChange={e => this.setState({ tempoEntregaMinimo: e.target.value })}
                                        >
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Máximo em Minutos'
                                        value={tempoEntregaMaximo}
                                        onChange={e => this.setState({ tempoEntregaMaximo: e.target.value })}
                                        >
                                    </Form.Input>

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
                                        <Link to={'/list-produto'}>Voltar</Link>
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

export default FormCliente;
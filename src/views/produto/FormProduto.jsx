import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';


function FormCliente() {

    const { state } = useLocation();

    const [idProduto, setIdProduto] = useState();
    const [codigo, setCodigo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valorUnitario, setValorUnitario] = useState("");
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState("");
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState("");

    useEffect(() => {
		
		if (state != null && state.id != null) {

			axios.get('http://localhost:8082/api/produto/'+state.id)
			.then((response) => {

                console.log(response.data)
				console.log('response.data.nome: ',response.data.nome)
				
				setIdProduto(response.data.id)
				setCodigo(response.data.codigo)
				setTitulo(response.data.titulo)
				setDescricao(response.data.descricao)
				setValorUnitario(response.data.valorUnitario)
				setTempoEntregaMinimo(response.data.tempoEntregaMinimo)
				setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
			})
		}
		
	}, [state]);

    function salvar() {

		let ProdutoRequest = {

            codigo: codigo,
            titulo: titulo,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoEntregaMinimo: tempoEntregaMinimo,
            tempoEntregaMaximo: tempoEntregaMaximo
        }


		if (idProduto != null) { //Alteração:

			axios.put("http://localhost:8082/api/produto" + idProduto, ProdutoRequest)
			.then((response) => { console.log('Produto alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alter um Produto.') })
			
		} else { //Cadastro:

			axios.post("http://localhost:8082/api/produto", ProdutoRequest)
			.then((response) => { console.log('Produto cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o Produto.') })
		}
 
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
                                        onChange={e => setTitulo(e.target.value )}
                                    />

                                    <Form.Input
                                        required
                                        fluid
                                        label='Código do Produto'
                                        value={codigo}
                                        onChange={e => setCodigo(e.target.value )}

                                    >
                                    </Form.Input>

                                </Form.Group>



                                <TextArea
                                    label='Descrição'
                                    placeholder='Informe a descrição do produto'
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value )}

                                />

                                <div style={{ marginBottom: '1%' }}></div>

                                <Form.Group widths='equal' >

                                    <Form.Input
                                        required
                                        fluid
                                        label='Valor Unitário'
                                        maxLength="100"
                                        value={valorUnitario}
                                        onChange={e => setValorUnitario(e.target.value )}
                                    />

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'
                                        value={tempoEntregaMinimo}
                                        onChange={e => setTempoEntregaMinimo(e.target.value )}
                                        >
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Máximo em Minutos'
                                        value={tempoEntregaMaximo}
                                        onChange={e => setTempoEntregaMaximo(e.target.value )}
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
                                            onClick={() => salvar()}
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
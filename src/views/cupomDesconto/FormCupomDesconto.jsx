import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';


export default function FormCliente() {

    const [codigoDesconto, setCodigoDesconto] = useState("");
    const [percentualDesconto, setPercentualDesconto] = useState("");
    const [valorDesconto, setValorDesconto] = useState("");
    const [valorMinimo, setValorMinimo] = useState("");
    const [qntMaximoUso, setQntMaximoUso] = useState("");
    const [inicioVigencia, setInicioVigencia] = useState("");
    const [fimVigencia, setFimVigencia] = useState("");

    const cupomRequest = {
        codigoDesconto: codigoDesconto,
        percentualDesconto: percentualDesconto,
        valorDesconto: valorDesconto,
        valorMinimoPedidoPermitido: valorMinimo,
        quantidadeMaximaUso: qntMaximoUso,
        inicioVigencia: inicioVigencia,
        fimVigencia: fimVigencia
    }

    function cadastrar(){

        axios.post("http://localhost:8082/api/cupomDesconto", cupomRequest)
        .then(res => {
            alert("Cupom criado com sucesso!")
        }).catch(error => console.log(`Ocorreu um erro ao criar novo Cupom: ${error}`));
    }

    return (
        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Cupom de Desconto &nbsp;<Icon name='angle double right' size="small" /> </span> Criar </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Cupom'
                                    maxLength="100"
                                    value={codigoDesconto}
                                    onChange={e => setCodigoDesconto(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='% de Desconto'
                                    value={percentualDesconto}
                                    onChange={e => setPercentualDesconto(e.target.value)}
                                    type="number"
                                    placeholder="Ex: 5"

                                >
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor do desconto em R$'
                                    placeholder="Ex: 15"
                                    value={valorDesconto}
                                    onChange={e => setValorDesconto(e.target.value)}

                                >
                                </Form.Input>


                            </Form.Group>

                            <div style={{ marginBottom: '1%' }}></div>

                            <Form.Group widths='equal' >

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor mínimo do pedido'
                                    maxLength="100"
                                    placeholder="Ex: 15"

                                    value={valorMinimo}
                                    onChange={e => setValorMinimo(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Quantidade máxima de uso'
                                    value={qntMaximoUso}
                                    placeholder="Ex: 10"

                                    onChange={e => setQntMaximoUso(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Início da Vigência'
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/2030"
                                        value={inicioVigencia}
                                        onChange={e => setInicioVigencia(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fim da Vigência'
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/2030"
                                        value={fimVigencia}
                                        onChange={e => setFimVigencia(e.target.value)}
                                    />
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
                                    <Link to={'/list-cupons'}>Voltar</Link>
                                </Button>

                                <Container textAlign='right'>

                                    <Button
                                        inverted
                                        circular
                                        icon
                                        labelPosition='left'
                                        color='blue'
                                        floated='right'
                                        onClick={() => cadastrar()}
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
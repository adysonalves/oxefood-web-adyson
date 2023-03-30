import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';

class FormEntregador extends React.Component {

    render() {
        return (
            <div>

                <div style={{ marginTop: '3%' }}>

                    <Container textAlign='justified' >

                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

                        <div style={{ marginTop: '4%' }}>

                            <Form>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        required
                                        fluid
                                        label='Nome'
                                        maxLength="100"
                                    />

                                    <Form.Input
                                        required
                                        fluid
                                        label='CPF'>
                                        <InputMask
                                            mask="999.999.999-99" />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='RG'>
                                    </Form.Input>

                                </Form.Group>


                                <Form.Group>

                                    <Form.Input
                                        fluid
                                        label='DT Nascimento'
                                        
                                    >
                                        <InputMask
                                            mask="99/99/9999" />
                                    </Form.Input>

                                </Form.Group>



                                <TextArea
                                    label='Descrição'
                                    placeholder='Informe a descrição do produto'

                                />

                                <div style={{ marginBottom: '1%' }}></div>

                                <Form.Group widths='equal' >

                                    <Form.Input
                                        required
                                        fluid
                                        label='Valor Unitário'
                                        maxLength="100"
                                    />

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'>
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Máximo em Minutos'>
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
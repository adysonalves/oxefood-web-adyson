import React from "react";
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';

class FormCliente extends React.Component {

    render() {
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
                                    />

                                    <Form.Input
                                        required
                                        fluid
                                        label='Código do Produto'>
                                    </Form.Input>

                                </Form.Group>



                                <TextArea
                                    label='Descrição'
                                    placeholder='Informe a descrição do produto'
                                    
                                />

                                <div style={{marginBottom: '1%'}}></div>

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

export default FormCliente;
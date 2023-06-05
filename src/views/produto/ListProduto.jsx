import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';

class ListCliente extends React.Component {

    state = {

        listaProdutos: []

    }

    componentDidMount = () => {

        this.carregarLista();

    }

    carregarLista = () => {

        axios.get("http://localhost:8082/api/produto")
            .then((response) => {

                this.setState({
                    listaProdutos: response.data
                })
            })

    };

    formatarData = (dataParam) => {

        if (dataParam == null || dataParam == '') {
            return ''
        }

        let dia = dataParam.substr(8, 2);
        let mes = dataParam.substr(5, 2);
        let ano = dataParam.substr(0, 4);
        let dataFormatada = dia + '/' + mes + '/' + ano;

        return dataFormatada
    };

    render() {
        return (
            <div>

                <div style={{ marginTop: '3%' }}>

                    <Container textAlign='justified' >

                        <h2> Produtos </h2>

                        <Divider />

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                                floated='right'
                            >
                                <Icon name='clipboard outline' />
                                <Link to={'/form-produto'}>Novo</Link>
                            </Button>

                            <br /><br /><br />

                            <Table color='orange' sortable celled>

                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Código</Table.HeaderCell>
                                        <Table.HeaderCell>Titulo</Table.HeaderCell>
                                        <Table.HeaderCell>Descrição</Table.HeaderCell>
                                        <Table.HeaderCell>Valor</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>

                                    {this.state.listaProdutos.map(produto => (

                                        <Table.Row>
                                            <Table.Cell>{produto.codigo}</Table.Cell>
                                            <Table.Cell>{produto.titulo}</Table.Cell>
                                            <Table.Cell>{produto.descricao}</Table.Cell>
                                            <Table.Cell>R${produto.valorUnitario}</Table.Cell>
                                            <Table.Cell textAlign='center'>

                                                 <Button
                                                    inverted
                                                    circular
                                                    color='green'
                                                    title='Clique aqui para editar os dados deste produto'
                                                    icon>
                                                    <Link to="/form-produto" state={{ id: produto.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                                </Button> &nbsp;

                                                <Button
                                                    inverted
                                                    circular
                                                    icon='trash'
                                                    color='red'
                                                    title='Clique aqui para remover este produto'
                                                    onClick={e => this.confirmaRemover(produto.id)} />

                                            </Table.Cell>
                                        </Table.Row>
                                    ))}

                                </Table.Body>
                            </Table>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default ListCliente;

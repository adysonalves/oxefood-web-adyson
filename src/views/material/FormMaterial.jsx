import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormMaterial extends React.Component {
	state = {

		titulo: null,
		valor: null,
		responsavel: null,
		localizacao: null,
		peso: null,
		dataAquisicao: null
	}

	salvar = () => {

		let materialRequest = {

			titulo: this.state.titulo,
			valor: this.state.valor,
			responsavel: this.state.responsavel,
			localizacao: this.state.localizacao,
			peso: this.state.peso,
			dataAquisicao: this.state.dataAquisicao
		}

		axios.post("http://localhost:8082/api/material", materialRequest)
			.then((response) => {
				alert('Material cadastrado com sucesso.')
			})
			.catch((error) => {
				alert('Erro ao incluir o um Material.')
			})
	}

	render() {
		return (
			<div>

				<div style={{ marginTop: '3%' }}>

					<Container textAlign='justified' >

						<h2> <span style={{ color: 'darkgray' }}> Material &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

						<Divider />

						<div style={{ marginTop: '4%' }}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Título'
										maxLength="100"
										value={this.state.titulo}
										onChange={e => this.setState({ titulo: e.target.value })}
									/>

									<Form.Input
										fluid
										label='Valor'
										value={this.state.valor}
										onChange={e => this.setState({ valor: e.target.value })}
									/>

								</Form.Group>

								<Form.Group>

									<Form.Input
										fluid
										label='Responsável'
										width={6}
										value={this.state.responsavel}
										onChange={e => this.setState({ responsavel: e.target.value })}
									/>

									<Form.Input
										fluid
										label='Localização'
										width={6}
										value={this.state.localizacao}
										onChange={e => this.setState({ localizacao: e.target.value })}
									/>

									<Form.Input
										fluid
										label='Peso'
										width={6}
										value={this.state.peso}
										onChange={e => this.setState({ peso: e.target.value })}
									/>

									<Form.Input
										fluid
										label='Data de Aquisição'
										width={6}
										value={this.state.dataAquisicao}
										onChange={e => this.setState({ dataAquisicao: e.target.value })}
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
										<Link to={'/list-material'}>Voltar</Link>
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

export default FormMaterial;
import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_SERVIDOR } from '../../util/Constantes';

export default function FormCliente () {

	const { state } = useLocation();

	const [idCliente, setIdCliente] = useState();
	const [nome, setNome] = useState();
	const [cpf, setCpf] = useState();
	const [dataNascimento, setDataNascimento] = useState();
	const [foneCelular, setFoneCelular] = useState();
	const [foneFixo, setFoneFixo] = useState();

	useEffect(() => {
		
		if (state != null && state.id != null) {

			axios.get(ENDERECO_SERVIDOR + '/api/cliente/'+state.id)
			.then((response) => {

				console.log('response.data.nome: ',response.data.nome)
				
				setIdCliente(response.data.id)
				setNome(response.data.nome)
				setCpf(response.data.cpf)
				setDataNascimento(formatarData(response.data.dataNascimento))
				setFoneCelular(response.data.foneCelular)
				setFoneFixo(response.data.foneFixo)
			})
		}
		
	}, [state])

	function formatarData(dataParam) {

        if (dataParam == null || dataParam == '') {
            return ''
        }
        
        let dia = dataParam.substr(8,2);
        let mes = dataParam.substr(5,2);
        let ano = dataParam.substr(0,4);
        let dataFormatada = dia + '/' + mes + '/' + ano;

        return dataFormatada
    }

	function salvar() {

		let clienteRequest = {

			nome: nome,
			cpf: cpf,
			dataNascimento: dataNascimento,
			foneCelular: foneCelular,
			foneFixo: foneFixo
		}

		if (idCliente != null) { //Alteração:

			axios.put(ENDERECO_SERVIDOR + "/api/cliente/" + idCliente, clienteRequest)
			.then((response) => { console.log('Cliente alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alter um cliente.') })
			
		} else { //Cadastro:

			axios.post(ENDERECO_SERVIDOR + "/api/cliente", clienteRequest)
			.then((response) => { console.log('Cliente cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o cliente.') })
		}
 
	}

	return(
		<div>

			<div style={{marginTop: '3%'}}>

				<Container textAlign='justified' >

					{ idCliente === undefined &&
						<h2> <span style={{color: 'darkgray'}}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
					}
					{ idCliente != undefined &&
						<h2> <span style={{color: 'darkgray'}}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}

					<Divider />

					<div style={{marginTop: '4%'}}>

						<Form>

							<Form.Group widths='equal'>

								<Form.Input
									required
									fluid
									label='Nome'
									maxLength="100"
									value={nome}
									onChange={e => setNome(e.target.value)}
								/>

								<Form.Input
									fluid
									label='CPF'>
									<InputMask 
										mask="999.999.999-99"
										value={cpf}
										onChange={e => setCpf(e.target.value)}
									/> 
								</Form.Input>

							</Form.Group>
							
							<Form.Group>

								<Form.Input
									fluid
									label='Fone Celular'
									width={6}>
									<InputMask 
										mask="(99) 9999.9999" 
										value={foneCelular}
										onChange={e => setFoneCelular(e.target.value)}
									/> 
								</Form.Input>

								<Form.Input
									fluid
									label='Fone Fixo'
									width={6}>
									<InputMask 
										mask="(99) 9999.9999"
										value={foneFixo}
										onChange={e => setFoneFixo(e.target.value)}
									/> 
								</Form.Input>

								<Form.Input
									fluid
									label='Data Nascimento'
									width={6}
								>
									<InputMask 
										mask="99/99/9999" 
										maskChar={null}
										placeholder="Ex: 20/03/1985"
										value={dataNascimento}
										onChange={e => setDataNascimento(e.target.value)}
									/> 
								</Form.Input>

							</Form.Group>

							<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

								<Button
									type="button"
									inverted
									circular
									icon
									labelPosition='left'
									color='orange'
									>
									<Icon name='reply' />
									<Link to={'/list-cliente'}>Voltar</Link>
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
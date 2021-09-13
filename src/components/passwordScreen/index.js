import React, { Fragment, useContext, useDebugValue, useState } from 'react';
import { submitForm } from '../../services/api';
import { MyContext } from '../../Context';
import {
	Form,
	Button,
	Password,
	Label,
	Clue,
	InputContainer,
	InfoText,
	ErrorText,
	ButtonContainer,
	TitleContainer,
	Counter
} from './styles';

export const PasswordScreen = () => {

	const {step, goToStep, requestStatus} = useContext(MyContext)

	const [keyword, setKeyword] = useState( '');
	const [confirmPass, setConfirmPass] = useState('');
	const [valid, setValidation] = useState('')
	const [equals, setEquals] = useState('')
	const [clue, setClue] = useState('');

	const handleSubmit = async(evt) => {
		evt.preventDefault()
		try {
			const { status } = await submitForm('sii', keyword, clue)
			nextScreen( status )
		} catch (error) {

			nextScreen( error.status )
		}


	}

	const nextScreen = (status) => {
		console.log(status)
		goToStep(step +1)
		requestStatus(status ===200)
	}

	const handleInput = (evt) => {
		evt.preventDefault()
		setKeyword(evt.target.value);
		const regExp = (/^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,24}$/)
		if (regExp.test(evt.target.value)) {
			setValidation('La contraseña es válida')
		} else {
			setValidation('La contraseña no es válida')
		}

	}

	const handleConfirm = (evt) => {
		evt.preventDefault()
		setConfirmPass(evt.target.value);
		if (keyword === evt.target.value) {
			setEquals('Contraseña confirmada')
		} else {
			setEquals('La contraseña no coincide')
		}
	}

	const handleClue = (evt) => {
	  evt.preventDefault()
		setClue(evt.target.value)
	}

	return(
		<Fragment>
			<TitleContainer>
				<h2>Crea aquí tu nueva Contraseña </h2>
				<p> La contraseña debe de tener entre 8 y 24 caracteres, con al menos un número y una mayuscula y tu pista no podra sobrepasar los 255 caracteres. Recuerda que todos los campos son obligatorios</p>
			</TitleContainer>
			<Form onSubmit={handleSubmit}>
				<div>
					<InputContainer>
						<Label>Introduce tu Contraseña</Label>
						<Password type="password" value={keyword.password} onChange={handleInput}/>
					</InputContainer>
					{valid.includes('no') ? <ErrorText> {valid} </ErrorText> : <InfoText> {valid}  </InfoText>}

					<InputContainer>
						<Label>Confirma tu Contraseña</Label>
						<Password type="password" value={confirmPass.password} onChange={handleConfirm}/>
					</InputContainer>
					{(valid.includes('no') || equals.includes('no')) ? <ErrorText> {equals} </ErrorText> : <InfoText> {equals} </InfoText>}
				</div>
				<div>
					<Label>Crea tu pista como recordatorio</Label>
					<Clue type="text" maxLength="255" onChange={handleClue}/>
					<Counter>{clue.length} / 255</Counter>
				</div>
				{(clue.length <=0  || valid.includes('no') || equals.includes('no')) ?
					'' : <ButtonContainer>
						<Button onClick={ handleSubmit }>Siguiente</Button>
					</ButtonContainer> }
			</Form>
		</Fragment>
	)
}

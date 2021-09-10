import React, { useState } from 'react';
import { Form, Button, Password, Label, Clue, InputContainer, InfoText, ErrorText , ButtonContainer} from './styles';

export const PasswordScreen = () => {
	const [keyword, setKeyword] = useState( '');
	const [confirmPass, setConfirmPass] = useState('');
	const [valid, setValidation] = useState('')
	const [equals, setEquals] = useState('')
	const [clue, setClue] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault()
		console.log(keyword)
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
		<Form onSubmit={handleSubmit}>
			<div>
				<InputContainer>
					<Label>Introduce tu Contraseña</Label>
					<Password type="password" value={keyword.password} onChange={handleInput}/>
				</InputContainer>
				{valid.includes('not') ? <ErrorText> {valid} </ErrorText> : <InfoText> {valid}  </InfoText>}

				<InputContainer>
					<Label>Confirma tu Contraseña</Label>
					<Password type="password" value={confirmPass.password} onChange={handleConfirm}/>
				</InputContainer>
				{(valid.includes('no') || equals.includes('no')) ? <ErrorText> {equals} </ErrorText> : <InfoText> {equals} </InfoText>}
			</div>
			<div>
				<Label>Crea tu pista como recordatorio</Label>
				<Clue type="text" maxLength="60" onChange={handleClue}/>
				<span>{clue.length} / 60</span>
			</div>
			<ButtonContainer>
				<Button>Siguiente</Button>
			</ButtonContainer>
		</Form>
	)
}

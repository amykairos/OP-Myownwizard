import React, { useState } from 'react';

export const PasswordScreen = () => {
	const [keyword, setKeyword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault()
		console.log(keyword)
	}

	const handleInput = (evt) => {
		evt.preventDefault()
		setKeyword(evt.target.value)

	}
	const handleConfirm = (evt) => {
		evt.preventDefault()
		setConfirmPass(evt.target.value);
		console.log(confirmPass)
	}

	return(
		<form onSubmit={handleSubmit}>
			<input type="password" value={keyword} onChange={handleInput}/>
			<input type="password" value={confirmPass} onChange={handleConfirm}/>
		</form>
	)
}
/*


import React, { useState } from 'react';
import { Form, Password, Button } from './styles';

const infoInputValue = (initialValue) => {
	const [value, setValue] = useState(initialValue)
	const onChange = e => {
		setValue(e.target.value)
	}

	return {value, onChange }
}

export const PasswordScreen = () => {
	const password = infoInputValue('');
	const confirmPassword = infoInputValue('');


	const validation = () => {

		console.log()
	}
	return(
		<Form onSubmit={validation}>
			<Password placeholder="Introduce una Contraseña" type="password" {...password} />
			<Password placeholder="Confirma tu Contraseña" type="password" {...confirmPassword} />
			<Button></Button>
		</Form>
	)
}*/

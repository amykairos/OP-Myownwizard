import React, { useState } from 'react';

export const Password = () => {
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
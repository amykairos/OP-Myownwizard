import React, { useState, createContext} from 'react';

export const MyContext = createContext()

const Provider = ({ children }) => {
	const [step, setStep] = useState(1)
	const [status, setStatus] = useState(false)

	const value = {
		step,
		goToStep: (_step) => {
			setStep(_step)
		},
		status,
		requestStatus: (response) => {
			setStatus(response)
		}
	}

	return (
		<MyContext.Provider value={value}>
			{children}
		</MyContext.Provider>
	)
}

export default {
	Provider,
	Consumer: MyContext.Consumer,
}


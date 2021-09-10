import React, { useState, createContext} from 'react';

const Context = createContext()

const Provider = ({ children }) => {
	const [step, setStep] = useState(1)

	const value = {
		step,
		goToStep: (_step) => {
			setStep(_step)
		}
	}
	console.log('estoy en el context', step)

	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export default {
	Provider,
	Consumer: Context.Consumer,
	TestComponent: ({children}) => (<div>{children('Hello World')}</div>)
}


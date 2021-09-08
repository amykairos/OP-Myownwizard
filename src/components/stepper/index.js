import React from 'react'
import { Step, Stepper } from './styles'

export const Wizard = ({steps =5}) => {
	return (
		<Stepper>
			{Array.from({length: steps}, (element, key) => {
				return <Step key={key}>{key +1}</Step>
			})}
		</Stepper>
	)
}
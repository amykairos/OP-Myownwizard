import React from 'react'
import Context from '../../Context'
import { Step, Stepper } from './styles'

export const Wizard = ({steps = 5}) => (
	<Context.Consumer>
		{
			({ step }) =>
				step
					?
					<Stepper>
						{Array.from({length: steps}, (element, key) => {
							return <Step data-testid='step' className={key+1===step ? 'red' : 'white'} key={key} >{key +1}</Step>
						})}
					</Stepper> :
					''
		}
	</Context.Consumer>)

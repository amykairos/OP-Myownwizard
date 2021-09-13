import React, { Fragment } from 'react';
import * as spanishInfo from '../../locale/es.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Container, Icon, Button } from './styles'
import Context from '../../Context';


export const FinalScreen = ({ status }) => {
	if (status) {
		let {	title, text, button	}  = spanishInfo.ok
		return (
			<Container>
				<div>
					<Icon icon={faCheckCircle} />
				</div>
				<div>
					<h2>{title}</h2>
					<p>{text}</p>
					<Context.Consumer>
						{({ step, goToStep }) =>
							<Button onClick={ goToStep.bind(this, step-2) }>{button}</Button>
						}
					</Context.Consumer>
				</div>
			</Container>
		)
	} else {
		let {	title, text, button	}  = spanishInfo.ko
		return (
			<Container>
				<div>
					<Icon icon={faExclamationTriangle} />
				</div>
				<div>
					<h3>{title}</h3>
					<p>{text}</p>
					<Context.Consumer>
						{({ step, goToStep }) =>
							<Button onClick={ goToStep.bind(this, step-2) }>{button}</Button>
						}
					</Context.Consumer>
				</div>
			</Container>
		)
	}

}
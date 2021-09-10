import React, { Fragment, useState } from 'react';
import { WellcomeSection } from '../wellcomeSection';
import * as spanishInfo from '../../locale/es.json'
import { LegalTermsContainer, TitleContainer } from './styles';
import Context from '../../Context';
import { Password } from '../passwordScreen';
import { on } from 'i18next';

export const WellcomeScreen = () => {
	const [checked, setChecked] = useState(false);

	const onSubmit = (evt) => {
		evt.preventDefault()

	}

	return (
		<Fragment>
			<WellcomeSection title={spanishInfo.wellcomeTitle}
											 img={spanishInfo.wellcomeImage}
											 imgDescription={spanishInfo.wellcomeAltImage}
											 info={spanishInfo.wellcomeText} >
			</WellcomeSection>
			<TitleContainer>
				<h4	>{spanishInfo.explanationTitle}</h4>
				<p>{spanishInfo.explanationTest}</p>
				<Context.Consumer>
					{({ step, goToStep }) =>
						<form>
							<LegalTermsContainer>
								<input type="checkbox"
											 checked={checked}
											 onChange={() => setChecked(!checked) } />
								<p>{spanishInfo.legalTerms}</p>
							</LegalTermsContainer>
							{checked && <button onClick={ goToStep.bind(this, step+1) }>Siguiente</button>}
						</form>
					}
				</Context.Consumer>

			</TitleContainer>

		</Fragment>
	)
}


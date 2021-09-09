import React, { Fragment, useState } from 'react';
import { WellcomeSection } from '../wellcomeSection';
import * as spanishInfo from '../../locale/es.json'
import { LegalTermsContainer, TitleContainer } from './styles';

export const WellcomeScreen = (nextStep) => {
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
				<form onSubmit={onSubmit}>
					<LegalTermsContainer>
						<input type="checkbox"
									 checked={checked}
									 onChange={() => setChecked(!checked) } />
						<p>{spanishInfo.legalTerms}</p>
					</LegalTermsContainer>
					{checked && <button>Siguiente</button>}
				</form>

			</TitleContainer>

		</Fragment>
	)
}


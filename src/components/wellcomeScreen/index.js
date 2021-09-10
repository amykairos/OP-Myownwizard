import React, { Fragment, useState } from 'react';
import { WellcomeSection } from '../wellcomeSection';
import * as spanishInfo from '../../locale/es.json'
import { LegalTermsContainer, TitleContainer, ButtonContainer, Button } from './styles';
import Context from '../../Context';

export const WellcomeScreen = () => {
	const [checked, setChecked] = useState(false);



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
							{checked &&
							<ButtonContainer>
								<Button onClick={ goToStep.bind(this, step+1) }>Siguiente</Button>
							</ButtonContainer> }
						</form>
					}
				</Context.Consumer>

			</TitleContainer>

		</Fragment>
	)
}


import React from 'react'
import OpenbankLogo from '../../assets/img/logo_openbank.png';
import { Wizard } from '../stepper';

import { HeaderContainer, LogoContainer, WizardContainer, Logo} from './styles';

export const Header = () => (
	<HeaderContainer>
		<LogoContainer>
			<Logo src={OpenbankLogo} alt={"openbank-logo"} />
		</LogoContainer>
		<WizardContainer>
			<Wizard steps="3" />
		</WizardContainer>

	</HeaderContainer>
)

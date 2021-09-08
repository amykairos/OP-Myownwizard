import React, { Fragment } from 'react';
import { Section} from '../section';
import * as spanishInfo from '../../locale/es.json'
import hi from '../../assets/img/hi.png'

export const WellcomeScreen = () =>
	<Fragment>
		<Section info={spanishInfo.wellcomeText} img={spanishInfo.wellcomeImage} imgDescription={spanishInfo.wellcomeAltImage}>
		</Section>
		<button></button>
	</Fragment>

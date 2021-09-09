import React from 'react';
import { SectionContainer, ImageSection} from './styles';

export const WellcomeSection = ({title, img, imgDescription, info}) =>
	<SectionContainer>
		<ImageSection src={img} alt={imgDescription} />
		<div>
			<h2>
				{title}
			</h2>
			<p>{info}</p>
		</div>
	</SectionContainer>

/**
 * 		Iconos diseñados por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a>

 *
 *
 */
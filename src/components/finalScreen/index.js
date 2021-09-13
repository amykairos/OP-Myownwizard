import React, { Fragment } from 'react';

export const FinalScreen = ({ status }) => {
	return (
		<Fragment>
			{status ? <h1>hi</h1> : <h4>bye</h4>}
		</Fragment>
	)
}
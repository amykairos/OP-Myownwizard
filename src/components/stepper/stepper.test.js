import React from 'react';
import { render, screen } from '@testing-library/react';
import'@testing-library/jest-dom'
import Context from '../../Context';
import { Wizard } from './index';


beforeAll(() => {
	const number = "6";
	render(<Context.Provider>
		<Wizard steps={number} />
	</Context.Provider>);
})

test('Render number steps', () => {
	expect(screen.getAllByTestId('step')).toHaveLength(6);
})


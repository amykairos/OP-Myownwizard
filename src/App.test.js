import React from 'react';
import { App } from './App';
import { render, screen } from '@testing-library/react';
import'@testing-library/jest-dom'
import Context from './Context';

beforeAll(() => {
  render(<Context.Provider>
    <App/>,
  </Context.Provider>);
})

test('render App and Logo header', () => {

  expect(screen.getByAltText("openbank-logo")).toBeInTheDocument()})

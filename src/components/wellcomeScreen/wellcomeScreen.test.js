import React from "react";
import { screen, render, getByAltText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Context from '../../Context';
import { WellcomeScreen } from './index';
import * as spanishInfo from '../../locale/es.json';




describe("Wellcome message", () => {
	beforeAll(() => {
		render(<Context.Provider>
			<WellcomeScreen  />
		</Context.Provider>);
	})

	test("should render all welcome messages", () => {
		const { getByText, getByAltText } = screen;
		const title = getByText("Bienvenido a la Cuenta Corriente OpenClose");
		const imageDescription = getByAltText("Imagen de Bienvenida")
		const text = getByText(
			"Aqui podras disfrutar de todas las ventajas de ser nuestra cuenta corriente, nunca mas pagaras comisiones, disfurtaras de los Descuentos Open, puedes usarla desde tu movil o reloj tener hasta 4 cotitulares. Todo son ventajas."
		);
		const explanationTitle = getByText("Te explicamos que viene a continuacion:");
		const explanationText = getByText("En la siguiente pantalla tendrás que facilitarnos una contraseña única. No podrás recuperarla, asi que recuérdala bien. Necesitamos que confirmes lo siguiente para continuar");
		const legalTerms = getByText("Confirmo que soy mayor de edad y acepto que mis datos sean tratados según la política de protección de datos");

		expect(title).toBeInTheDocument();
		expect(imageDescription).toBeInTheDocument();
		expect(text).toBeInTheDocument();
		expect(explanationTitle).toBeInTheDocument();
		expect(explanationText).toBeInTheDocument();
		expect(legalTerms).toBeInTheDocument();
	});
});
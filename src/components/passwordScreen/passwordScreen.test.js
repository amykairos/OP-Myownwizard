import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Context from '../../Context';
import { PasswordScreen } from './index';



describe("Password text info", () => {
	beforeAll(() => {
		render(<Context.Provider>
			<PasswordScreen  />
		</Context.Provider>);
	})

	test("should render title, description and input's labels", () => {
		const { getByText } = screen;
		const title = getByText("Crea aquí tu nueva Contraseña");
		const text = getByText(
			"La contraseña debe de tener entre 8 y 24 caracteres, con al menos un número y una mayuscula y tu pista no podra sobrepasar los 255 caracteres. Recuerda que todos los campos son obligatorios"
		);
		const labelPass = getByText("Introduce tu Contraseña");
		const labelConfirm = getByText("Confirma tu Contraseña");

		expect(title).toBeInTheDocument();
		expect(text).toBeInTheDocument();
		expect(labelPass).toBeInTheDocument();
		expect(labelConfirm).toBeInTheDocument();
	});
});
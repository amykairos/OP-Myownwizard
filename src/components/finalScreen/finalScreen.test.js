import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Context from '../../Context';
import { FinalScreen } from './index';
import * as spanishInfo from '../../locale/es.json';



describe("Success feedback", () => {
	beforeAll(() => {
		const success = true;
		render(<Context.Provider>
			<FinalScreen status={success} />
		</Context.Provider>);
	})

	test("should render title and description for request successful ", () => {
		const { getByText } = screen;
		const title = getByText("Tu Password Manager ya está creado!");
		const text = getByText(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh."
		);
		const button = getByText("Acceder >");

		expect(title).toBeInTheDocument();
		expect(text).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});
});
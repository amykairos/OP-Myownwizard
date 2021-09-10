import React from "react";
import { WellcomeScreen } from './components/wellcomeScreen/index'
import Context from './Context';

import "./App.scss";
import { Header } from './components/header';
import { PasswordScreen } from './components/passwordScreen';


 export const App = () => {
	 return (
     <div className="App">
		 	<Header />
			<Context.Consumer>
				{
					({ step }) =>
						step === 1
						?
							<WellcomeScreen /> :
						step === 2 ?	<PasswordScreen /> :
						step === 3 ? <h3> tercer paso</h3> :
						<h4> Algo no fué bien</h4>
				}
			</Context.Consumer>
     </div>
   )
 }
import React from "react";
import { WellcomeScreen } from './components/wellcomeScreen/index'
import Context from './Context';

import "./App.scss";
import { Header } from './components/header';
import { PasswordScreen } from './components/passwordScreen';
import { FinalScreen } from './components/finalScreen'


 export const App = () => {
	 return (
     <div className="App">
		 	<Header />
			<Context.Consumer>
				{
					({ step, status }) =>
						step === 1
						?
							<WellcomeScreen /> :
						step === 2 ?	<PasswordScreen /> :
						step === 3 ? <FinalScreen status={ status } />  :
					null
				}
			</Context.Consumer>
     </div>
   )
 }
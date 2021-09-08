import styled from 'styled-components';

export const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100px;
	background-color: #ececec ;
	border-bottom: 3px solid #FF0049;
	
	`
export const LogoContainer = styled.div`
	width: 30%;
`
export const WizardContainer = styled.div`
	width: 70%;
`

export const Logo = styled.img`
  display: block;
  margin: auto;
  width: 90%;
	
	@media(min-width: 768px) {
		width: 80%;
	}
  @media(min-width: 1115px) {
    width: 65%;
  }
`
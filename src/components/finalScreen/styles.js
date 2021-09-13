import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 95%;
  font-size: 11px;
  margin: 5px auto;
  border: 3px solid #ccc;
  padding: 15px 0px;
}
  @media(min-width: 768px) {
    max-width: 75%;
    margin: 50px auto 20px;
    padding: 50px 20px;

  }
`

export const Icon = styled(FontAwesomeIcon)`
	font-size: 35px;
	margin: 15px;
	color: #ccc;
`

export const Button = styled.span`
	font-weight: 700;
	cursor: pointer;
	`
import styled from 'styled-components';

export const Form = styled.form`
  max-width: 95%;
  margin: 50px auto;

  @media(min-width: 768px) {
    max-width: 75%;
  }
`

export const Password = styled.input`
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 8px;
	padding: 8px 4px;
	display: block;
	width: 100%;
  @media(min-width: 768px) {
    width: 40%;
		display: inline;
  }
	
`



export const Button = styled.button`
	background: #002B45;
	color: white;
`
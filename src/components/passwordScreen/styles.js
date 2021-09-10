import styled from 'styled-components';

export const TitleContainer = styled.div`
  margin: 35px auto 0px;
  max-width: 95%;
  font-size: 11px;
  @media(min-width: 768px) {
  max-width: 75%;
    margin: 50px auto 20px;
}
`

export const Form = styled.form`
  max-width: 95%;
  margin: 20px auto;

  @media(min-width: 768px) {
    max-width: 75%;
    margin: 50px auto;
  }
`
export const InputContainer = styled.div`
	min-height: 60px;
`

export const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 25px;
  width: 75%;
  margin: 5px auto;
  @media(min-width: 768px) {
    width: 40%;
    display: inline;
    margin: 20px 10px;
  }
`

export const Password = styled.input`
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 8px;
	padding: 8px 4px;
	display: block;
	width: 75%;
	margin: 5px auto;
	
	&:focus {
		outline: none;
		box-shadow: 3px 0px 30px tgba(163,163,163,0.4);
	}
  @media(min-width: 768px) {
    width: 40%;
		display: inline;
    margin: 5px 10px;
		max-width: 350px;
  }
`
export const InfoText = styled.p`
	font-size: 10px;
	margin-bottom: 0px;
	color: #44dc21;
	font-weight: 700;
	width: 75%;
  margin: 0px auto 15px;
	@media(min-width: 768px){
		width: 50%;
	}
`
export const ErrorText = styled.p`
  font-size: 10px;
  margin-bottom: 0px;
  color: #FF0049;
  font-weight: 700;
  width: 75%;
  margin: 0px auto 15px;
  @media(min-width: 768px){
    width: 50%;
  }
`

export const Clue = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px;
  display: block;
  width: 75%;
  margin: 20px auto;
  @media(min-width: 768px) {
    width: 90%;
    margin: 20px 10px;
  }
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 90%;
`

export const Counter = styled.p`
	width: 75%;
	margin: 5px auto;
  @media(min-width: 768px) {
    width: 95%;
    margin: 20px auto;
  }
`

export const Button = styled.button`
	background: #002B45;
	color: white;
`
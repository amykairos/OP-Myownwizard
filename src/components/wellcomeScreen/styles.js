import styled from 'styled-components';

export const TitleContainer = styled.div`
  max-width: 95%;
  margin: 50px auto;

  @media(min-width: 768px) {
    max-width: 75%;
  }
	`

export const LegalTermsContainer = styled.div`
	display: flex;
	align-items: baseline;
	margin-top: 20px;
	margin-bottom: 25px;
	& p {
		font-size: 13px;
	}

  @media(min-width: 768px) {
		margin-top: 100px;
  }
	`
import styled from 'styled-components';

export const SectionContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 50px auto;
  max-width: 95%;
  font-size: 11px;

  @media(min-width: 768px) {
    max-width: 75%;
    font-size: 14px;
  }
	`

export const ImageSection = styled.img`
	max-width: 20%;
	display: inline-block;
	margin: 0px 40px;
  @media(min-width: 768px) {
    max-width: 15%;
  }
	`


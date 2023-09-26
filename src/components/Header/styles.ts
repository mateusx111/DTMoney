import styled from "styled-components";

export const HeaderContainer = styled.header`
 background-image: linear-gradient(
    to right,
    #53BDDF,
    #4AA3E4,
    #9AD3DB
  );
  padding: 2.5rem 0 7.5rem; //superior/horizontal/inferior
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
` 

export const NewTransactionButton = styled.button`
   height: 50px;
   border: none;
   background: ${props => props.theme["blue-900"]};
   color: ${props => props.theme.white};
   font-weight: bold;
   padding: 0 1.25rem;
   border-radius: 8px;
   cursor: pointer;

   transition: background-color 0.2s;

   &:hover {
     background:  ${props => props.theme["blue-700"]};
   }
`    
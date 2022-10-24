import styled from "styled-components";

export const StyledNavbar = styled.header`

display: flex;
flex-direction: row;
justify-content: flex-end;
text-align: center;
background: #191e23;
color: lightblue;
text-transform: uppercase;
padding: 10px 0;

& > a {
  display: flex;
  letter-spacing: .9em;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 100;
  text-decoration: none;
  margin: 0 20px
}
`;
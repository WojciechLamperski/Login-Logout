import styled from "styled-components";

export const StyledNavbar = styled.header`

display: flex;
flex-direction: row;
justify-content: flex-end;
text-align: center;
background: #111;
color: lightblue;
text-transform: uppercase;
padding: 10px 0;

& > a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightblue;
  margin: 0 20px
}
`;
import { createGlobalStyle } from "styled-components";

export const GlobalStyle:any = createGlobalStyle`

.content{
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  color: black;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
  color: white;
  background: #556677;
  letter-spacing: .1em;
  text-shadow: 0 -1px 0 #fff, 0 0.25px 0 #2e2e2e, 0 0.5px 0 #2c2c2c, 0 0.75px 0 #2a2a2a, 0 1px 0 #282828, 0 1.25px 0 #262626, 0 1.5px 0 #242424, 0 1.75px 0 #222, 0 2px 0 #202020, 0 2.75px 0 #1e1e1e, 0 2.5px 0 #1c1c1c, 0 2.75px 0 #1a1a1a, 0 3px 0 #181818, 0 3.75px 0 #161616, 0 3.5px 0 #141414, 0 3.75px 0 #121212, 0 5px 5px rgba(0,0,0,0.8);
  background-color: #677b8f;
  
  opacity: 0.8;
  background-image:  linear-gradient(135deg, #556677 25%, transparent 25%), linear-gradient(225deg, #556677 25%, transparent 25%), linear-gradient(45deg, #556677 25%, transparent 25%), linear-gradient(315deg, #556677 25%, #677b8f 25%);
  background-position:  40px 0, 20px 0, 0 0, 0 0;
  background-size: 80px 80px;
  background-repeat: repeat;
}

p{
  
}

p span{
  //color: #ffdb1b;
  //background: rgb(50, 60, 70, 0.9);
  //border-radius: 10px;
  //padding: 3px;
}

.app {
    text-align: center;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  #root{
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
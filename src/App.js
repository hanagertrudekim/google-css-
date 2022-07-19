import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import Link from "./components/Link";

const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Link />
    </>
  );
}

export default App;

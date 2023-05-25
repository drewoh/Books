import React from 'react';
import './App.css';

import Books from "components/Books";

import { 
  NextUIProvider, styled, Container, Text, Navbar 
} from '@nextui-org/react';

const books = [{id:1, title:"Shoe Dog", authors: "Phil Knight"}]

function App() {
  const StyledContainer = styled(Container, {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  });

  return (
    <NextUIProvider>
      <StyledContainer>
        <Books books={books}/>
      </StyledContainer>
    </NextUIProvider>
  );
}

export default App;

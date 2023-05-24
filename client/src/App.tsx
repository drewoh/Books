import React from 'react';
import './App.css';

import { NextUIProvider, Button } from '@nextui-org/react';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <Button auto flat>
          Hello, World!
        </Button>
      </div>
    </NextUIProvider>
  );
}

export default App;

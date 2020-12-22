import React from 'react';

import StyledApp from './styled/StyledApp';

import Button from '@material-ui/core/Button';

/**
 * Entry point component for the app.
 *
 * @component
 * @example
 * return (
 *  <App />
 * )
 */

function App() {
  return (
    <StyledApp>
      React App!
      <br />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </StyledApp>
  );
}

export default App;

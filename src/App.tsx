// Imports
import { Fragment } from 'react';
import { GlobalStyle } from './GlobalStyle';

// Components
import Header from './components/Header';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
};

export default App;

import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../apollo/apolloClient';
import 'semantic-ui-css/semantic.min.css';

export const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      {console.log(client)}
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;

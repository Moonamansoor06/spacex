 import React from "react";
import ReactDOM from 'react-dom';
import {  
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from "@apollo/client";
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './components/theme/theme';
import App from "./App";
import App2 from './components/App2'



const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://spacexdata.herokuapp.com/graphql'
  })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={Theme}>
    
    <App2/>
    <App/>    
  
    
    </MuiThemeProvider>
  </ApolloProvider>,

  document.getElementById('root')
);

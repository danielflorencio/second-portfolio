'use client'

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import GitInfo from './Index';
  
  const token = process.env.GITHUB_KEY
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://api.github.com/graphql',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    }
});

export default function GithubInfoApolloWrapper(){
    return(
        <ApolloProvider client={client}>
            <GitInfo/>
        </ApolloProvider>
    )
}
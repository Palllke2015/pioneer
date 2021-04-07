import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React, { ReactNode } from 'react'
import { HashRouter } from 'react-router-dom'

import { makeServer } from '../mocks/server'
import { AccountsContextProvider } from './accounts/provider'
import { ApiContextProvider } from './api/provider'
import { GlobalStyle } from './GlobalStyle'
import { KeyringContextProvider } from './keyring/provider'
import { MembershipContextProvider } from './membership/provider'
import { ModalContextProvider } from './modal/provider'
import { ServerContextProvider } from './server/provider'

interface Props {
  children: ReactNode
}

const server = makeServer()

const client = new ApolloClient({
  uri: 'http://localhost:8081/graphql',
  cache: new InMemoryCache(),
})

export const Providers = (props: Props) => (
  <KeyringContextProvider>
    <AccountsContextProvider>
      <ApiContextProvider>
        <ServerContextProvider value={server}>
          <ApolloProvider client={client}>
            <MembershipContextProvider>
              <HashRouter>
                <ModalContextProvider>
                  <GlobalStyle />
                  {props.children}
                </ModalContextProvider>
              </HashRouter>
            </MembershipContextProvider>
          </ApolloProvider>
        </ServerContextProvider>
      </ApiContextProvider>
    </AccountsContextProvider>
  </KeyringContextProvider>
)
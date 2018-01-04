import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Browse from './Browse'
import CreateListing from './CreateListing'
import Listing from './Listing'
import './index.css'
import registerServiceWorker from './registerServiceWorker';

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjc0iaohu3tct0145nnqqb7vw' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path='/' component={Browse} />
        <Route path='/listings' component={Browse} />
        <Route path='/listings/:id' component={Listing} />
        <Route path='/create' component={CreateListing} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
registerServiceWorker();

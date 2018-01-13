import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Home from './pages/Home'
import Browse from './pages/Browse'
import CreateListing from './pages/CreateListing'
import ListingCard from './components/ListingCard'
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
        <Route exact path='/' component={Home} />
        <Route path='/rentals' component={Browse} />
        <Route path='/rentals/:id' component={ListingCard} />
        <Route path='/sales' component={Browse} />
        <Route path='/sales/:id' component={ListingCard} />
        <Route path='/create' component={CreateListing} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
registerServiceWorker();

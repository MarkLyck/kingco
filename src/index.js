import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Home from './pages/Home'
import Browse from './pages/Browse'
import CreateListing from './pages/CreateListing'
import ListingDetails from './components/ListingDetails'

import Services from './pages/About/Services'
import CodeOfConduct from './pages/About/CodeOfConduct'

import AboutGibraltar from './pages/Gibraltar/About'
import Residency from './pages/Gibraltar/Residency'
import Cat2AndHepps from './pages/Gibraltar/Cat2AndHepps'
import Tax from './pages/Gibraltar/Tax'
import StampDuty from './pages/Gibraltar/StampDuty'
import Schooling from './pages/Gibraltar/Schooling'

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
    <BrowserRouter>
      <div className="router">
        <Route exact path='/' component={Home} />
        <Route path='/rentals' component={Browse} />
        <Route path='/rentals/:ref' component={ListingDetails} />
        <Route path='/sales' component={Browse} />
        <Route path='/sales/:ref' component={ListingDetails} />
        <Route path='/create' component={CreateListing} />

        <Route path='/about/services' component={Services} />
        <Route path='/about/code_of_conduct' component={CodeOfConduct} />
        <Route path='/gibraltar/about' component={AboutGibraltar} />
        <Route path='/gibraltar/residency' component={Residency} />
        <Route path='/gibraltar/cat2_hepps' component={Cat2AndHepps} />
        <Route path='/gibraltar/tax' component={Tax} />
        <Route path='/gibraltar/stamp_duty' component={StampDuty} />
        <Route path='/gibraltar/schooling' component={Schooling} />
      </div>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
)
registerServiceWorker();

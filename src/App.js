import React, { Component } from 'react';
import Feed from 'feed'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new HttpLink( { uri: 'https://api.graph.cool/simple/v1/cjc0iaohu3tct0145nnqqb7vw' }),
  cache: new InMemoryCache()
});




let feed = new Feed({
  title: 'Feed Title',
  description: 'This is my personal feed!',
  id: 'http://example.com/',
  link: 'http://example.com/',
  image: 'http://example.com/image.png',
  favicon: 'http://example.com/favicon.ico',
  copyright: 'All rights reserved 2013, John Doe',
  updated: new Date(), // optional, default = today
  generator: 'awesome', // optional, default = 'Feed for Node.js'
  feedLinks: {
    json: 'https://example.com/json',
    atom: 'https://example.com/atom',
  },
  author: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    link: 'https://example.com/johndoe'
  }
})

feed.addItem({
    title: 'post.title',
    id: 'post.url',
    link: 'post.url',
    description: 'post.description',
    content: 'post.content',
    author: [{
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        link: 'https://example.com/janedoe'
    }, {
        name: 'Joe Smith',
        email: 'joesmith@example.com',
        link: 'https://example.com/joesmith'
    }],
    contributor: [{
    name: 'Shawn Kemp',
    email: 'shawnkemp@example.com',
    link: 'https://example.com/shawnkemp'
    }, {
        name: 'Reggie Miller',
        email: 'reggiemiller@example.com',
        link: 'https://example.com/reggiemiller'
    }],
    image: 'post.image'
})

feed.addCategory('Technologie')

feed.addContributor({
    name: 'Johan Cruyff',
    email: 'johancruyff@example.com',
    link: 'https://example.com/johancruyff'
})

console.log(feed.rss2())

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

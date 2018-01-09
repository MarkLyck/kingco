import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Filter from '../../components/Filter'
import './home.css'

const Home = ({ allListings }) => {
    console.log(allListings)
    return (
        <div className="home">
            home
            <Filter />
        </div>
    )
}

const ListingsQuery = gql`
  query {
      allListings {
        id
        type
        bathrooms
        bedrooms
        description
        images
        price
        title
        type
      },
  }
`

const HomeWithGraphQL = graphql(ListingsQuery, {
    props: ({ data }) => ({ ...data }),
})(Home)

export default HomeWithGraphQL

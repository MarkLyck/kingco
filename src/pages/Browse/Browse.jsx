import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import AdvancedFilter from '../../components/AdvancedFilter'
import ListingCard from '../../components/ListingCard'
import './browse.css'

class Browse extends Component {
    state = {
        filter: {}
    }

    setFilter(filter) {
        this.setState({ filter })
    }

    render() {
        const { location, allListings = [] } = this.props
        const { filter } = this.state

        const type = location.pathname.indexOf('rentals') > 0 ? 'rental' : 'sale'
        const listings = allListings.filter(listing => listing.type === type)

        return (
            <div className="browse">
                <AdvancedFilter setFilter={this.setFilter} filter={filter} />
                <ul className="listings">
                    {listings.map(listing => <ListingCard key={listing.id} listing={listing} />)}
                </ul>
            </div>
        )
    }
}

const ListingsQuery = gql`
  query {
      allListings {
        id
        reference
        type
        area
        bathrooms
        bedrooms
        description
        images
        price
        type
        features
      },
  }
`

const BrowseWithGraphQL = graphql(ListingsQuery, {
    props: ({ data }) => ({ ...data }),
})(Browse)

export default BrowseWithGraphQL

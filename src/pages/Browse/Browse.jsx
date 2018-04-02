import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import AdvancedFilter from '../../components/AdvancedFilter'
import ListingCard from '../../components/ListingCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './browse.css'

class Browse extends Component {
    state = {
        filter: {}
    }

    setFilter(filter) {
        this.setState({ filter })
    }

    componentWillReceiveProps(newProps) {
        console.log('newProps', newProps);
        console.log('oldProps', this.props);
    }

    render() {
        const { location, allListings = [], history } = this.props
        const { filter } = this.state

        const type = location.pathname.indexOf('rentals') > 0 ? 'rental' : 'sale'
        const listings = allListings.filter(listing => listing.type === type)

        return (
            <div className="browse">
                <Navbar />
                {/* <AdvancedFilter setFilter={this.setFilter} filter={filter} /> */}
                <ul className="listings">
                    {listings.map(listing => <ListingCard key={listing.id} listing={listing} history={history} />)}
                </ul>
                <Footer />
            </div>
        )
    }
}

const ListingsQuery = gql`
  query {
      allListings {
        id
        reference
        country
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

import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ListingCard from '../../components/ListingCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './browse.css'

class Browse extends Component {
    state = { filter: {} }

    componentWillReceiveProps(newProps) {
        const { history } = newProps
        if (history.location.search) {
            const query = window.location.search.substring(1)
            const vars = query.split('&')
            const filter = vars.reduce((acc, curr) => {
                if (curr.split("=")[0] === 'area' && (
                    curr.split("=")[1].toLocaleLowerCase() === 'spain'
                    || curr.split("=")[1].toLocaleLowerCase() === 'gibraltar'
                    || curr.split("=")[1].toLocaleLowerCase() === 'any')) {
                    acc.area = 'any'
                } else if (curr.split("=")[0] === 'country' && curr.split("=")[1].toLocaleLowerCase() === 'any') {
                    acc.country = 'any'
                } else {
                    const key = curr.split("=")[0]
                    acc[key] = curr.split("=")[1]
                }

                return acc
            }, {})
            this.setState({ filter })
        }
    }

    render() {
        const { location, allListings = [], history } = this.props
        const { filter } = this.state

        const type = location.pathname.indexOf('rentals') > 0 ? 'rental' : 'sale'
        let listings = allListings.filter(listing => listing.type === type)

        if (Object.keys(filter).length > 0 && filter.constructor === Object) {
            listings = listings.filter(listing => {
                if (filter.area) {
                    return (
                        (listing.country === filter.country || filter.country === 'any')
                        && (listing.area === filter.area || filter.area === 'any')
                        && listing.price >= Number(filter.min)
                        && listing.price <= Number(filter.max)
                    )
                }
            })
        }

        console.log(filter)
        console.log(listings)

        return (
            <div className="browse">
                <Navbar />
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

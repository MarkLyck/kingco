import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Paper from 'material-ui/Paper';
import Slider from 'react-slick'
import Modal from 'material-ui/Modal';
import { Button } from 'material-ui'
import './listingDetails.css'

class ListingDetails extends React.Component {
    state = { open: true }

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { allListings } = this.props 
        const listing = allListings && allListings.length ? allListings[0] : null;
        if (!listing || !listing.country) {
            return ''
        }
        console.log(listing);

        const currencyCode = listing.country === 'Gibraltar' ? '£' : '€'
        const price = listing.price.toLocaleString()

        const sliderSettings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
        <Modal
            open={this.state.open}
            className="listing-details"
            onClose={this.handleClose}
        >
            <Paper className="listing-details-container">
                <Slider {...sliderSettings}>
                    {listing.images.map(image => <div className="image-preview" style={{ backgroundImage: `url(${image})` }} />)}
                </Slider>
                
                <div className="details-content">
                    <div className="listing-header">
                        <h1 className="listing-title">{listing.area}</h1>
                        <h2 className="listing-price">{currencyCode}{price} {listing.type === 'rental' && 'pcm'}</h2>
                    </div>

                    <div className="stats">
                        <h3 className="reference">Ref: {listing.reference}</h3>
                        <h3 className="beds-baths">{listing.bedrooms} Beds | {listing.bathrooms} Baths</h3>
                    </div>
                    <ul className="features">
                        {listing.features.map(feature => <li key={feature} className="feature">{feature}</li>)}
                    </ul>
                </div>
            </Paper>
        </Modal>
    )
    }
}

const ref = Number(window.location.href.split('/').pop())

const ListingQuery = gql`
  query ListingQuery($ref: Int) {
    allListings(filter: {
        reference: $ref
    }) {
        id,
        reference,
        type,
        area,
        bathrooms,
        bedrooms,
        country,
        description,
        images,
        price,
        type,
        features
    }
  }
`

const ListingWithGraphQL = graphql(ListingQuery, {
    options: {
        variables: { ref },
    },
    props: ({ data }) => ({ ...data }),
})(ListingDetails)

export default ListingWithGraphQL
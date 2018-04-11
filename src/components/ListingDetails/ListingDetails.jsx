import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import Paper from 'material-ui/Paper'
import Modal from 'material-ui/Modal'
import Slider from 'react-slick'
import './listingDetails.css'

class ListingDetails extends React.Component {
    state = { open: true }

    handleClose = () => {
        this.setState({ open: false })
        if (this.props.close) this.props.close()
        if (this.props.history && this.props.history.location.pathname.includes('rentals')) {
            this.props.history.replace('/rentals')
        } else if (this.props.history && this.props.history.location.pathname.includes('sales')) {
            this.props.history.replace('/sales')
        } else if (!this.props.history && window.location.href.includes('rentals')) {
            window.history.pushState('rentals', 'Title', `/rentals`);
        } else if (!this.props.history && window.location.href.includes('sales')) {
            window.history.pushState('sales', 'Title', `/sales`);
        }
    };

    handleDelete = (id) => {
        this.props.deleteListing({ variables: {
            id
        }})
        .then((id) => {
            console.log('deleted', id)
            this.handleClose()
        })
        .catch(err => {
            console.error('something went wrong deleting listing', err)
            this.handleClose()
        })
    }

    renderDeleteButton = (id) => {
        if (localStorage.getItem('skAdmin')) {
            return <button className="delete-button" onClick={() => this.handleDelete(id)}>Delete Listing</button>
        }
        return ''
    }

    render() {
        const { allListings, browseListing } = this.props
        let listing
        if (browseListing) {
            listing = browseListing
        } else if (allListings && allListings.length) {
            listing = allListings[0]
        }

        if (!listing || !listing.country) {
            return ''
        }

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
                        {listing.images.map(image => <div key={image} className="image-preview" style={{ backgroundImage: `url(${image})` }} />)}
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
                        <p className="description">{listing.description}</p>
                        <div className="button-container">
                            <a href={`mailto:stephanie@sk-estates.com?Subject=${listing.area}%20ref%20${listing.reference}`} className="contact-button">Contact us</a>
                            <button onClick={this.handleClose} className="close-button">Keep looking</button>
                            {this.renderDeleteButton(listing.id)}
                        </div>
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

const DeleteListingMutation = gql`
    mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
        id
    }
}`;

const ListingWithGraphQL = compose(
    graphql(ListingQuery, {
        options: {
            variables: { ref },
        },
        props: ({ data }) => ({ ...data }),
    }),
    graphql(DeleteListingMutation, {
        props: ({ mutate }) => ({ deleteListing: mutate }),
    })
)(ListingDetails)

// const ListingWithGraphQL = )

export default ListingWithGraphQL
import React from 'react'
import Card from 'material-ui/Card';
import PhotoCamera from 'material-ui-icons/PhotoCamera';
import { Button } from 'material-ui';
import './listingCard.css'

const ListingCard = ({ listing }) => {
    const currencyCode = listing.country === 'Gibraltar' ? '£' : '€'
    const price = listing.price.toLocaleString()

    console.log(listing)
    return (
        <Card className="listing-card">
            <div className="image-preview" style={{ backgroundImage: `url(${listing.images[0]})` }}>
                <button className="all-photos">
                    <PhotoCamera />
                    <p className="photo-amount">{listing.images.length}</p>
                </button>
            </div>
            <div className="card-content">
                <div className="listing-header">
                    <h2 className="listing-title">{listing.title}</h2>
                    <h2 className="listing-price">{currencyCode}{price} {listing.type === 'rental' && 'pcm'}</h2>
                </div>
                <h3 className="beds-baths">{listing.bedrooms} Beds | {listing.bathrooms} Baths</h3>
                <Button className="details-button" raised color="primary">View details</Button>
            </div>
        </Card>
    )
}

export default ListingCard

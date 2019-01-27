import React from "react";
import Card from "material-ui/Card";
import PhotoCamera from "material-ui-icons/PhotoCamera";
import ListingDetails from "../ListingDetails";
import "./listingCard.css";

class ListingCard extends React.Component {
  state = {
    showingDetails: false
  };

  componentDidMount() {
    const { listing, history } = this.props;
    if (history.location.pathname.includes(listing.reference)) {
      this.setState({ showingDetails: true });
    }
  }

  showModal = ref => {
    this.setState({ showingDetails: true });

    if (this.props.history.location.pathname.includes("rentals")) {
      window.history.pushState("rental", "Title", `/rentals/${ref}`);
    } else {
      window.history.pushState("rental", "Title", `/sales/${ref}`);
    }
  };

  closeModal = () => {
    this.setState({ showingDetails: false });
  };

  render() {
    const { listing } = this.props;

    const currencyCode = listing.country === "Gibraltar" ? "£" : "€";
    const price = listing.price.toLocaleString();

    return (
      <Card className="listing-card">
        {this.state.showingDetails ? (
          <ListingDetails browseListing={listing} close={this.closeModal} />
        ) : (
          ""
        )}
        <div
          className="image-preview"
          style={{ backgroundImage: `url(${listing.mainImage})` }}
        >
          <button className="all-photos">
            <PhotoCamera />
            <p className="photo-amount">{listing.images.length}</p>
          </button>
        </div>
        <div className="card-content">
          <div className="listing-header">
            <h2 className="listing-title">{listing.area}</h2>
            <h2 className="listing-price">
              {currencyCode}
              {price} {listing.type === "rental" && "pcm"}
            </h2>
          </div>
          <div className="stats">
            <h3 className="reference">Ref: {listing.reference}</h3>
            <h3 className="beds-baths">
              {listing.bedrooms} Beds | {listing.bathrooms} Baths
            </h3>
          </div>
          <ul className="features">
            {listing.features.map(feature => (
              <li key={feature} className="feature">
                {feature}
              </li>
            ))}
          </ul>
          <button
            className="details-button"
            onClick={() => this.showModal(listing.reference)}
          >
            View details
          </button>
        </div>
      </Card>
    );
  }
}

export default ListingCard;

import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql} from 'react-apollo'
import { withStyles } from 'material-ui/styles';
import gql from 'graphql-tag'
import Browse from '../Browse'
import { Button, TextField } from 'material-ui';
import Menu, { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormHelperText, FormControlLabel, FormLabel } from 'material-ui/Form';
import KeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown';
import './styles.css'

class CreateListing extends React.Component {

  state = {
    type: 'rental',
    country: 'Gibraltar',
    title: '',
    description: '',
    address: '',
    bedrooms: '',
    bathrooms: '',

    listingAnchorEl: null,
    listingMenuOpen: false,
    countryAnchorEl: null,
    countryMenuOpen: false,
  }

  handleListingMenuClick = event => {
    this.setState({ listingMenuOpen: true, listingAnchorEl: event.currentTarget });
  };

  setListingType = (type) => {
      this.setState({ listingMenuOpen: false, type });
  }
  handleCountryMenuClick = event => {
    this.setState({ countryMenuOpen: true, countryAnchorEl: event.currentTarget });
  };

  setCountry = (country) => {
      this.setState({ countryMenuOpen: false, country });
  }

  render() {
    const {
        listingAnchorEl,
        listingMenuOpen,
        handleListingMenuClose,

        countryAnchorEl,
        countryMenuOpen,
        handleCountryMenuClose,

        title,
        description,
        type,
        country,
        bedrooms,
        bathrooms,
        address,
        deposit,
        price,
    } = this.state
    return (
        <div className=''>
            <form className='create-listing-form' noValidate autoComplete="off">
                <TextField
                    className='field'
                    label='Title'
                    value={title}
                    onChange={e => this.setState({ title: e.target.value })}
                    autoFocus
                />
                <div className="row">
                    <div className="menu-container">
                        <h4>Listing type</h4>
                        <div>
                            <Button
                                aria-owns={listingMenuOpen ? 'listing-menu' : null}
                                aria-haspopup="true"
                                onClick={this.handleListingMenuClick}
                                raised
                                color="primary"
                            >
                                {type}
                                <KeyboardArrowDown className="rightIcon" />
                            </Button>
                            <Menu
                                id="listing-menu"
                                anchorEl={listingAnchorEl}
                                open={listingMenuOpen}
                                onClose={this.handleListingMenuClose}
                            >
                                <MenuItem onClick={() => this.setListingType('rental')}>Rental</MenuItem>
                                <MenuItem onClick={() => this.setListingType('sale')}>Sale</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className="menu-container">
                        <h4>Country</h4>
                        <div>
                            <Button
                                aria-owns={countryMenuOpen ? 'country-menu' : null}
                                aria-haspopup="true"
                                onClick={this.handleCountryMenuClick}
                                raised
                                color="primary"
                            >
                                {country}
                                <KeyboardArrowDown className="rightIcon" />
                            </Button>
                            <Menu
                                id="country-menu"
                                anchorEl={countryAnchorEl}
                                open={countryMenuOpen}
                                onClose={this.handleCountryMenuClose}
                            >
                                <MenuItem onClick={() => this.setCountry('Gibraltar')}>Gibraltar</MenuItem>
                                <MenuItem onClick={() => this.setCountry('Spain')}>Spain</MenuItem>
                            </Menu>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <TextField
                        className='field'
                        value={bedrooms}
                        label='Bedrooms'
                        type="number"
                        onChange={e => this.setState({ bedrooms: Number(e.target.value) })}
                    />
                    <TextField
                        className='field'
                        value={bathrooms}
                        label='Bathrooms'
                        type="number"
                        onChange={e => this.setState({ bathrooms: Number(e.target.value) })}
                    />
                </div>
                <div className="row">
                    <FormControl fullWidth className="field">
                        <InputLabel htmlFor="deposit">Deposit</InputLabel>
                        <Input
                            id="adornment-deposit"
                            // value={this.state.deposit}
                            onChange={e => this.setState({ deposit: Number(e.target.value) })}
                            startAdornment={<InputAdornment position="start">{ country === 'Gibraltar' ? '£' : '€' }</InputAdornment>}
                        />
                    </FormControl>
                    <FormControl fullWidth className="field">
                        <InputLabel htmlFor="price">{type === 'rental' ? 'Price per month' : 'Price'}</InputLabel>
                        <Input
                            id="adornment-price"
                            // value={this.state.price}
                            onChange={e => this.setState({ price: Number(e.target.value) })}
                            startAdornment={<InputAdornment position="start">{ country === 'Gibraltar' ? '£' : '€' }</InputAdornment>}
                        />
                    </FormControl>
                </div>
                <TextField
                    className='field'
                    value={description}
                    label='Description'
                    multiline
                    onChange={e => this.setState({ description: e.target.value })}
                />
                <TextField
                    className='field'
                    value={address}
                    label='Address'
                    onChange={e => this.setState({ address: e.target.value })}
                />
                <Button className='' raised color="primary" onClick={this.handlePost}>Create listing</Button>
            </form>
        </div>
    )
  }

  handlePost = async () => {
    const {
        type,
        country,
        title,
        description,
        bedrooms,
        bathrooms,
        address,
        deposit,
        price,
    } = this.state
    await this.props.createListingMutation({ variables: {
        type,
        country,
        title,
        description,
        bedrooms,
        bathrooms,
        address,
        deposit,
        price,
    }})
    // this.props.history.replace('/')
  }

}

const CREATE_LISTING_MUTATION = gql`
  mutation createListingMutation(
      $type: String!,
      $country: String!,
      $title: String!,
      $description: String!,
      $bedrooms: Int!,
      $bathrooms: Int!,
      $address: String,
      $deposit: Float!,
      $price: Float!,
  ) {
    createListing(
        type: $type,
        country: $country,
        title: $title,
        description: $description,
        bedrooms: $bedrooms,
        bathrooms: $bathrooms,
        address: $address,
        deposit: $deposit,
        price: $price
    ) {
      id
      type
      title
      description
      bedrooms
      bathrooms
      address
      deposit
      price
    }
  }
`

const CreateListingWithMutation = graphql(CREATE_LISTING_MUTATION, {name: 'createListingMutation'})(CreateListing)
export default withRouter(CreateListingWithMutation)

import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Dropzone from 'react-dropzone'
import { Button, TextField } from 'material-ui';
import Menu, { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Card from 'material-ui/Card';
import { FormControl } from 'material-ui/Form';
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

    files: [],
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

  onDrop(files) {
    const stateFiles = this.state.files
    files.forEach(file => stateFiles.push(file))
    console.log(stateFiles)
    this.setState({ files: stateFiles });
  }

  uploadImage = file => new Promise((resolve) => {
        const data = new FormData()
        data.append('data', file)

        fetch('https://api.graph.cool/file/v1/cjc0iaohu3tct0145nnqqb7vw', {
            method: 'POST',
            body: data,
        })
            .then(response => response.json())
            .then((imageFile) => {
                resolve(imageFile.url)
            })
    })

    postListing = async (imageUrls) => {
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
            images: imageUrls,
        }})
        this.props.history.replace('/')
    }

    handlePost = () => {
        const { files } = this.state
        let imagesUploaded = 0
        let imageUrls = []
        files.forEach(file => {
            this.uploadImage(file)
                .then(url => {
                    imagesUploaded++
                    imageUrls.push(url)
                    if (imagesUploaded === files.length) {
                        this.postListing(imageUrls)
                    }
                })
        })
    }

  render() {
    const {
        listingAnchorEl,
        listingMenuOpen,

        countryAnchorEl,
        countryMenuOpen,

        files,

        title,
        description,
        type,
        country,
        bedrooms,
        bathrooms,
        address,
    } = this.state

    return (
        <div className=''>
            <form className='create-listing-form' noValidate autoComplete="off">
                <Dropzone onDrop={this.onDrop.bind(this)} className="dropzone" accept="image/jpeg, image/png">
                    {!files.length && <p>Upload images</p>}
                    {files.length ? (
                        <ul className="img-preview-list">
                            {files.map((file) => (
                                <Card className="image-card" key={file.lastModified}>
                                    <img className='image-preview' src={file.preview} alt="property" />
                                </Card>)
                            )}
                        </ul>
                    ) : ''}
                </Dropzone>
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
                            onChange={e => this.setState({ deposit: Number(e.target.value) })}
                            startAdornment={<InputAdornment position="start">{ country === 'Gibraltar' ? '£' : '€' }</InputAdornment>}
                        />
                    </FormControl>
                    <FormControl fullWidth className="field">
                        <InputLabel htmlFor="price">{type === 'rental' ? 'Price per month' : 'Price'}</InputLabel>
                        <Input
                            id="adornment-price"
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
      $images: [String!],
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
        images: $images
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
      images
    }
  }
`

const CreateListingWithMutation = graphql(CREATE_LISTING_MUTATION, {name: 'createListingMutation'})(CreateListing)
export default withRouter(CreateListingWithMutation)

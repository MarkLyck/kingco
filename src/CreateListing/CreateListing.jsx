import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql} from 'react-apollo'
import { withStyles } from 'material-ui/styles';
import gql from 'graphql-tag'
import Browse from '../Browse'
import { Button, TextField } from 'material-ui';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormHelperText, FormControlLabel, FormLabel } from 'material-ui/Form';
import './styles.css'

class CreateListing extends React.Component {

  state = {
    type: 'rental',
    title: '',
    description: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
  }

  render() {
    return (
    <div className=''>
        <form className='create-listing-form' noValidate autoComplete="off">
            <TextField
                className='field'
                value={this.state.imageUrl}
                label='Title'
                onChange={e => this.setState({ title: e.target.value })}
                autoFocus
            />
            <FormControl component="fieldset" required className="fieldset">
                <FormLabel component="legend">Listing type</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    className="radiogroup"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <FormControlLabel value="Rental" control={<Radio />} label="Rental" />
                    <FormControlLabel value="Sale" control={<Radio />} label="Sale" />
                </RadioGroup>
            </FormControl>
            <div className="row">
                <TextField
                    className='field'
                    value={this.state.imageUrl}
                    label='Bedrooms'
                    type="number"
                    onChange={e => this.setState({ bedrooms: e.target.value })}
                />
                <TextField
                    className='field'
                    value={this.state.imageUrl}
                    label='Bathrooms'
                    type="number"
                    onChange={e => this.setState({ bathrooms: e.target.value })}
                />
            </div>
            <div className="row">
            <FormControl fullWidth className="field">
                <InputLabel htmlFor="deposit">Deposit</InputLabel>
                <Input
                id="adornment-deposit"
                value={this.state.deposit}
                onChange={e => this.setState({ deposit: e.target.value })}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className="field">
                <InputLabel htmlFor="price">Price</InputLabel>
                <Input
                id="adornment-price"
                value={this.state.price}
                onChange={e => this.setState({ price: e.target.value })}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
            </div>
            <TextField
                className='field'
                value={this.state.description}
                label='Description'
                multiline
                onChange={e => this.setState({ description: e.target.value })}
            />
            <TextField
                className='field'
                value={this.state.description}
                label='Address'
                onChange={e => this.setState({ address: e.target.value })}
            />
            <Button className='' onClick={this.handlePost}>Create listing</Button>
        </form>
    </div>
    )
  }

  handlePost = async () => {
    const { type, description, title } = this.state
    await this.props.createListingMutation({ variables: {
        type,
        description,
        title
    }})
    // this.props.history.replace('/')
  }

}

const CREATE_LISTING_MUTATION = gql`
  mutation createListingMutation($type: String!, $description: String!, $title: String!) {
    createListing(
        type: $type,
        title: $title,
        description: $description
    ) {
      id
      type
      title
      description
    }
  }
`

const CreateListingWithMutation = graphql(CREATE_LISTING_MUTATION, {name: 'createListingMutation'})(CreateListing)
export default withRouter(CreateListingWithMutation)

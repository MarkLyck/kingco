import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql} from 'react-apollo'
import Modal from 'react-modal'
import gql from 'graphql-tag'
import Browse from '../Browse'

class CreateListing extends React.Component {

  state = {
    type: 'rental',
    title: '',
    description: '',
  }

  componentDidMount() {
      Modal.setAppElement(Browse);
  }

  render() {
    return (
      <Modal
        isOpen
        contentLabel='Create Listing'
        onRequestClose={this.props.history.goBack}
      >
        <div className=''>
          <div className=''>
            {/* {this.state.imageUrl &&
              <img
                src={this.state.imageUrl}
                alt=''
                className=''
              />} */}
            <input
              className=''
              value={this.state.imageUrl}
              placeholder='Title'
              onChange={e => this.setState({ title: e.target.value })}
              autoFocus
            />
            <input
              className=''
              value={this.state.description}
              placeholder='Description'
              onChange={e => this.setState({ description: e.target.value })}
            />
            {this.state.description &&
              this.state.title &&
              <button
                className=''
                onClick={this.handlePost}
              >
                Post
              </button>}
          </div>
        </div>
      </Modal>
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

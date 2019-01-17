import React from "react";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Dropzone from "react-dropzone";
import { Button, TextField } from "material-ui";
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import IconButton from "material-ui/IconButton";
import Menu, { MenuItem } from "material-ui/Menu";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControlLabel, FormGroup } from "material-ui/Form";
import Checkbox from "material-ui/Checkbox";
import Card from "material-ui/Card";
import { FormControl } from "material-ui/Form";
import KeyboardArrowDown from "material-ui-icons/KeyboardArrowDown";
import Delete from "material-ui-icons/Delete";
import Add from "material-ui-icons/Add";
import { gibraltarAreaList, spainAreaList } from "../../common/areaLists";
import "./styles.css";

class CreateListing extends React.Component {
  state = {
    type: "rental",
    country: "Gibraltar",
    area: "Select area",
    description: "",
    refNumber: "",
    bedrooms: "",
    bathrooms: "",
    sqmInterior: 0,
    sqmTerrace: 0,
    feature: "",
    features: [],

    parkingAvailable: false,
    poolAvailable: false,
    cat2Available: false,

    listingAnchorEl: null,
    listingMenuOpen: false,
    countryAnchorEl: null,
    countryMenuOpen: false,

    files: [],
    mainImage: ""
  };

  componentDidMount() {
    localStorage.setItem("skAdmin", true);
  }

  handleListingMenuClick = event =>
    this.setState({
      listingMenuOpen: true,
      listingAnchorEl: event.currentTarget
    });
  setListingType = type => this.setState({ listingMenuOpen: false, type });

  handleCountryMenuClick = event =>
    this.setState({
      countryMenuOpen: true,
      countryAnchorEl: event.currentTarget
    });
  setCountry = country => this.setState({ countryMenuOpen: false, country });

  handleAreaMenuClick = event =>
    this.setState({ areaMenuOpen: true, areaAnchorEl: event.currentTarget });
  setArea = area => this.setState({ areaMenuOpen: false, area });

  setParking = () =>
    this.setState({ parkingAvailable: !this.state.parkingAvailable });
  setPool = () => this.setState({ poolAvailable: !this.state.poolAvailable });
  setCat2 = () => this.setState({ cat2Available: !this.state.cat2Available });

  addFeature = () => {
    const stateFeatures = this.state.features;
    stateFeatures.push(this.state.feature);
    this.setState({ features: stateFeatures, feature: "" });
  };

  removeFeature = index => {
    const stateFeatures = this.state.features;
    stateFeatures.splice(index, 1);
    this.setState({ features: stateFeatures });
  };

  onDrop(files) {
    const stateFiles = this.state.files;
    files.forEach(file => stateFiles.push(file));
    let mainImage = this.state.mainImage;
    if (mainImage === "") {
      mainImage = files[0].name;
    }
    this.setState({ files: stateFiles, mainImage });
  }

  uploadImage = file =>
    new Promise(resolve => {
      const data = new FormData();
      data.append("data", file);

      fetch("https://api.graph.cool/file/v1/cjc0iaohu3tct0145nnqqb7vw", {
        method: "POST",
        body: data
      })
        .then(response => response.json())
        .then(imageFile => {
          resolve(imageFile.url);
        });
    });

  postListing = async (imageUrls, mainImageUrl) => {
    const {
      type,
      country,
      refNumber,
      area,
      parkingAvailable,
      poolAvailable,
      cat2Available,
      description,
      bedrooms,
      bathrooms,
      sqmInterior = 0,
      sqmTerrace = 0,
      features,
      price
    } = this.state;

    await this.props.createListingMutation({
      variables: {
        type,
        country,
        area,
        parking: parkingAvailable,
        pool: poolAvailable,
        cat2: cat2Available,
        description,
        bedrooms,
        bathrooms,
        sqmInterior,
        sqmTerrace,
        features,
        price,
        reference: refNumber,
        images: imageUrls,
        mainImage: mainImageUrl
      }
    });
    this.props.history.replace("/");
  };

  handlePost = () => {
    const { files, mainImage } = this.state;
    let imagesUploaded = 0;
    let imageUrls = [];
    let mainImageUrl = "";
    files.forEach(file => {
      this.uploadImage(file).then(url => {
        imagesUploaded++;
        console.log(file.name, mainImage);
        if (file.name === mainImage) {
          console.log("setting mainImageUrl to", url);
          mainImageUrl = url;
        } else {
          imageUrls.push(url);
        }

        if (imagesUploaded === files.length) {
          this.postListing(imageUrls, mainImageUrl);
        }
      });
    });
  };

  setMainImage = mainImage => this.setState({ mainImage });

  render() {
    const {
      listingAnchorEl,
      listingMenuOpen,

      countryAnchorEl,
      countryMenuOpen,

      areaAnchorEl,
      areaMenuOpen,

      files,
      mainImage,

      description,
      refNumber,
      type,
      country,
      area,
      bedrooms,
      bathrooms,
      sqmInterior,
      sqmTerrace,
      feature,
      features
      // address,
    } = this.state;

    const areaList =
      country === "Gibraltar" ? gibraltarAreaList : spainAreaList;

    return (
      <div className="">
        <form className="create-listing-form" noValidate autoComplete="off">
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            className="dropzone"
            accept="image/jpeg, image/png"
          >
            {!files.length && <p>Upload images</p>}
          </Dropzone>
          {files.length ? (
            <ul className="img-preview-list">
              {files.map(file => {
                let imageClass = "image-card";
                if (file.name === mainImage) {
                  imageClass += " main-image";
                }
                return (
                  <Card
                    className={imageClass}
                    key={file.lastModified}
                    onClick={() => this.setMainImage(file.name)}
                  >
                    <img
                      className="image-preview"
                      src={file.preview}
                      alt="property"
                    />
                  </Card>
                );
              })}
            </ul>
          ) : (
            ""
          )}
          <div className="row">
            <div className="menu-container">
              <h4>Listing type</h4>
              <div>
                <Button
                  aria-owns={listingMenuOpen ? "listing-menu" : null}
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
                  <MenuItem onClick={() => this.setListingType("rental")}>
                    Rental
                  </MenuItem>
                  <MenuItem onClick={() => this.setListingType("sale")}>
                    Sale
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <div className="menu-container">
              <h4>Country</h4>
              <div>
                <Button
                  aria-owns={countryMenuOpen ? "country-menu" : null}
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
                  <MenuItem onClick={() => this.setCountry("Gibraltar")}>
                    Gibraltar
                  </MenuItem>
                  <MenuItem onClick={() => this.setCountry("Spain")}>
                    Spain
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="menu-container">
              <h4>Area</h4>
              <div>
                <Button
                  aria-owns={areaMenuOpen ? "area-menu" : null}
                  aria-haspopup="true"
                  onClick={this.handleAreaMenuClick}
                  raised
                  color="primary"
                >
                  {area}
                  <KeyboardArrowDown className="rightIcon" />
                </Button>
                <Menu
                  id="area-menu"
                  anchorEl={areaAnchorEl}
                  open={areaMenuOpen}
                  onClose={this.handleAreaMenuClose}
                >
                  {areaList.map(area => (
                    <MenuItem
                      key={area.label}
                      onClick={() => this.setArea(area.label)}
                    >
                      {area.label}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
            <div />
            <FormGroup row className="checkbox-group">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.parkingAvailable}
                    onChange={this.setParking}
                    value="parking"
                  />
                }
                label="Parking"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.poolAvailable}
                    onChange={this.setPool}
                    value="pool"
                  />
                }
                label="Pool"
              />
              <FormControlLabel
                disabled={country === "Spain"}
                control={
                  <Checkbox
                    checked={this.state.cat2Available}
                    onChange={this.setCat2}
                    value="Cat 2"
                  />
                }
                label="Cat 2"
              />
            </FormGroup>
          </div>
          <div className="row">
            <TextField
              className="field"
              value={refNumber !== 0 ? refNumber : ""}
              label="Reference Number"
              onChange={e => this.setState({ refNumber: e.target.value })}
            />
            <FormControl fullWidth className="field">
              <InputLabel htmlFor="price">
                {type === "rental" ? "Price per month" : "Price"}
              </InputLabel>
              <Input
                id="adornment-price"
                onChange={e => this.setState({ price: Number(e.target.value) })}
                startAdornment={
                  <InputAdornment position="start">
                    {country === "Gibraltar" ? "£" : "€"}
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="row">
            <TextField
              className="field"
              value={bedrooms !== 0 ? bedrooms : ""}
              label="Bedrooms"
              type="number"
              onChange={e =>
                this.setState({ bedrooms: Number(e.target.value) })
              }
            />
            <TextField
              className="field"
              value={bathrooms !== 0 ? bathrooms : ""}
              label="Bathrooms"
              type="number"
              onChange={e =>
                this.setState({ bathrooms: Number(e.target.value) })
              }
            />
          </div>
          <div className="row">
            <TextField
              className="field"
              value={sqmInterior !== 0 ? sqmInterior : ""}
              label="sqm Interior"
              type="number"
              onChange={e =>
                this.setState({ sqmInterior: Number(e.target.value) })
              }
            />
            <TextField
              className="field"
              value={sqmTerrace !== 0 ? sqmTerrace : ""}
              label="sqm Terrace"
              type="number"
              onChange={e =>
                this.setState({ sqmTerrace: Number(e.target.value) })
              }
            />
          </div>
          <div className="row fullwidth">
            <TextField
              className="field"
              value={description}
              label="Description"
              multiline
              onChange={e => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="row fullwidth">
            <TextField
              className="field"
              value={feature}
              label="Add feature"
              multiline
              onChange={e => this.setState({ feature: e.target.value })}
            />
            <IconButton raised="true" color="primary" onClick={this.addFeature}>
              <Add className="rightIcon" />
            </IconButton>
          </div>
          <div className="row fullwidth feature-container">
            {features.length ? <h4>Features</h4> : ""}
            <List dense>
              {features.map((feature, index) => (
                <ListItem button key={feature + index}>
                  <ListItemText primary={feature} />
                  <ListItemSecondaryAction>
                    <IconButton
                      aria-label="Delete"
                      onClick={() => this.removeFeature(index)}
                    >
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>

          <Button className="" raised color="primary" onClick={this.handlePost}>
            Create listing
          </Button>
        </form>
      </div>
    );
  }
}

const CREATE_LISTING_MUTATION = gql`
  mutation createListingMutation(
    $reference: String!
    $type: String!
    $country: String!
    $area: String!
    $description: String!
    $bedrooms: Int!
    $bathrooms: Int!
    $sqmInterior: Int!
    $sqmTerrace: Int!
    $price: Float!
    $images: [String!]
    $mainImage: String
    $parking: Boolean
    $pool: Boolean
    $cat2: Boolean
    $features: [String!]
  ) {
    createListing(
      reference: $reference
      type: $type
      country: $country
      area: $area
      description: $description
      sqmInterior: $sqmInterior
      sqmTerrace: $sqmTerrace
      bedrooms: $bedrooms
      bathrooms: $bathrooms
      price: $price
      images: $images
      mainImage: $mainImage
      parking: $parking
      pool: $pool
      cat2: $cat2
      features: $features
    ) {
      id
      reference
      type
      country
      area
      bedrooms
      bathrooms
      price
      images
      mainImage
      parking
      pool
      cat2
      features
    }
  }
`;

const CreateListingWithMutation = graphql(CREATE_LISTING_MUTATION, {
  name: "createListingMutation"
})(CreateListing);
export default withRouter(CreateListingWithMutation);

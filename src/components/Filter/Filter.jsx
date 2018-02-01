import React, { Component } from 'react'
// import { Button } from 'material-ui';
import Menu, { MenuItem } from 'material-ui/Menu'
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import KeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown'
import { gibraltarAreaList, spainAreaList } from '../../common/areaLists'
import './filter.css'

class Filter extends Component {
    state = {
        area: 'any',
        areaAnchorEl: null,
        areaMenuOpen: false,

        type: 'rent',
        typeAnchorEl: null,
        typeMenuOpen: false,

        priceMin: 0,
        priceMax: 5000,
    }

    handleAreaMenuClick = event => this.setState({ areaAnchorEl: event.currentTarget, areaMenuOpen: !this.state.areaMenuOpen })
    handleAreaMenuClose = event => this.setState({ areaAnchorEl: null, areaMenuOpen: false })
    handleAreaSelect = area => this.setState({ area, areaAnchorEl: null, areaMenuOpen: false })

    handleTypeMenuClick = event => this.setState({ typeAnchorEl: event.currentTarget, typeMenuOpen: !this.state.typeMenuOpen })
    handleTypeMenuClose = event => this.setState({ typeAnchorEl: null, typeMenuOpen: false })
    handleTypeSelect = type => this.setState({ type, typeAnchorEl: null, typeMenuOpen: false })

    render() {
        const {
            area,
            areaAnchorEl,
            areaMenuOpen,

            type,
            typeAnchorEl,
            typeMenuOpen,

            priceMin,
            priceMax,
        } = this.state

        const currencySymbol ='£' //: '€'

        return (
            <div className="filter">
                <div className="menu-container">
                    <div>
                        <button
                            aria-owns={typeMenuOpen ? 'type-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleTypeMenuClick}
                            raised
                            color="primary"
                            className="filter-dropdown-button"
                        >
                            <div className="filter-button-content">
                                <h4>I want to...</h4>
                                <h3>{type}</h3>
                            </div>
                            <KeyboardArrowDown className="rightIcon" />
                        </button>
                        <Menu
                            id="area-menu"
                            anchorEl={typeAnchorEl}
                            open={typeMenuOpen}
                            onClose={this.handleTypeMenuClose}
                        >
                            <List className="filter-area-list">
                                <MenuItem onClick={() => this.handleTypeSelect('rent')}>Rent</MenuItem>
                                <MenuItem onClick={() => this.handleTypeSelect('buy')}>Buy</MenuItem>
                            </List>
                        </Menu>
                    </div>
                </div>
                <div className="filter-divider" />
                <div className="menu-container">
                    <div>
                        <button
                            aria-owns={areaMenuOpen ? 'area-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleAreaMenuClick}
                            raised
                            color="primary"
                            className="filter-dropdown-button"
                        >
                            <div className="filter-button-content">
                                <h4>Neighbourhood</h4>
                                <h3>{area}</h3>
                            </div>
                            <KeyboardArrowDown className="rightIcon" />
                        </button>
                        <Menu
                            id="area-menu"
                            anchorEl={areaAnchorEl}
                            open={areaMenuOpen}
                            onClose={this.handleAreaMenuClose}
                        >
                            <List className="filter-area-list">
                                <ListItem onClick={() => this.handleAreaSelect('Any')}>Any</ListItem>
                                <ListItem onClick={() => this.handleAreaSelect('Gibraltar')}>Gibraltar</ListItem>
                                <ListItem onClick={() => this.handleAreaSelect('Spain')}>Spain</ListItem>
                                <Divider light />
                                {gibraltarAreaList.map(area => <ListItem onClick={() => this.handleAreaSelect(area.label)}>{area.label}</ListItem>)}
                                <Divider light />
                                {spainAreaList.map(area => <ListItem onClick={() => this.handleAreaSelect(area.label)}>{area.label}</ListItem>)}
                            </List>
                        </Menu>
                    </div>
                </div>
                <div className="filter-divider" />
                <div className="menu-container">
                    <div>
                        <button
                            aria-haspopup="true"
                            onClick={this.handlePriceRangeClick}
                            raised
                            color="primary"
                            className="filter-dropdown-button"
                        >
                            <div className="filter-button-content">
                                <h4>Price range</h4>
                                <h3>{currencySymbol}{priceMin} - {currencySymbol}{priceMax}</h3>
                            </div>
                            <KeyboardArrowDown className="rightIcon" />
                        </button>
                    </div>
                </div>
                <button className="search-button">Search</button>
            </div>
        )
    }
}

export default Filter

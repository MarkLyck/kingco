import React, { Component } from 'react'
import InputRange from 'react-input-range'
import { Link } from 'react-router-dom'
import 'react-input-range/lib/css/index.css'
import Menu, { MenuItem } from 'material-ui/Menu'
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import KeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown'
import KeyboardArrowUp from 'material-ui-icons/KeyboardArrowUp'
import ClickOutside from 'react-click-outside'
import { gibraltarAreaList, spainAreaList } from '../../common/areaLists'
import './filter.css'

class Filter extends Component {
    state = {
        area: 'any',
        country: 'Any',
        areaAnchorEl: null,
        areaMenuOpen: false,

        type: 'rent',
        typeAnchorEl: null,
        typeMenuOpen: false,

        showPriceRange: false,
        priceRange: { min: 0, max: 10000 },
        maxRange: 10000,
        step: 100,
    }

    handleAreaMenuClick = event => this.setState({ areaAnchorEl: event.currentTarget, areaMenuOpen: !this.state.areaMenuOpen })
    handleAreaMenuClose = event => this.setState({ areaAnchorEl: null, areaMenuOpen: false })
    handleAreaSelect = (area, country) => this.setState({ area, country, areaAnchorEl: null, areaMenuOpen: false })

    handleTypeMenuClick = event => this.setState({ typeAnchorEl: event.currentTarget, typeMenuOpen: !this.state.typeMenuOpen })
    handleTypeMenuClose = event => this.setState({ typeAnchorEl: null, typeMenuOpen: false })
    handleTypeSelect = type => this.setState({
        type,
        typeAnchorEl: null,
        typeMenuOpen: false,
        priceRange: { min: 0, max: type === 'rent' ? 10000 : 1000000 },
        maxRange: type === 'rent' ? 10000 : 10000000,
        step: type === 'rent' ? 100 : 25000,
    })

    togglePriceRange = () => this.setState({ showPriceRange: !this.state.showPriceRange })

    renderPriceRange = (currencySymbol) => (
        <ClickOutside onClickOutside={this.togglePriceRange}>
            <InputRange
                className="price-range"
                maxValue={this.state.maxRange}
                minValue={0}
                step={this.state.step}
                allowSameValues={false}
                onChange={value => this.setState({ priceRange: value })}
                formatLabel={value => `${currencySymbol}${value.toLocaleString()}`}
                value={this.state.priceRange}
            />
        </ClickOutside>
    )

    search = () => {
        const {
            area,
            country,
            type,
            priceRange,
        } = this.state

        console.log('area', area)
        console.log('country', country)
        console.log('type', type)
        console.log('priceRange', priceRange)

        if (type === 'rent') {
            this.props.history.push(`/rentals?country=${country}&area=${area}&min=${priceRange.min}&max=${priceRange.max}`)
        } else {
            this.props.history.push(`/sales?country=${country}&area=${area}&min=${priceRange.min}&max=${priceRange.max}`)
        }
        
    }

    render() {
        const {
            area,
            country,
            areaAnchorEl,
            areaMenuOpen,

            type,
            typeAnchorEl,
            typeMenuOpen,

            priceRange,
            showPriceRange,
        } = this.state

        const currencySymbol = (country === 'Gibraltar' || country === 'Any') ? '£' : '€'

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
                                <h3 className="capitalize">{type}</h3>
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
                <div className="menu-container location">
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
                                <h4>Location</h4>
                                <h3 className="capitalize">{area}</h3>
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
                                <ListItem onClick={() => this.handleAreaSelect('Any', 'Any')}>Any</ListItem>
                                <ListItem onClick={() => this.handleAreaSelect('Gibraltar', 'Gibraltar')}>Gibraltar</ListItem>
                                <ListItem onClick={() => this.handleAreaSelect('Spain', 'Spain')}>Spain</ListItem>
                                <Divider light />
                                {gibraltarAreaList.map(area => <ListItem key={area.label} onClick={() => this.handleAreaSelect(area.label, 'Gibraltar')}>{area.label}</ListItem>)}
                                <Divider light />
                                {spainAreaList.map(area => <ListItem key={area.label} onClick={() => this.handleAreaSelect(area.label, 'Spain')}>{area.label}</ListItem>)}
                            </List>
                        </Menu>
                    </div>
                </div>
                <div className="filter-divider location-divider" />
                <div className="menu-container">
                    <div className="range-container">
                        {showPriceRange && this.renderPriceRange(currencySymbol)}
                        <button
                            aria-haspopup="true"
                            onClick={this.togglePriceRange}
                            raised
                            color="primary"
                            className="filter-dropdown-button"
                        >
                            <div className="filter-button-content">
                                <h4>Price range</h4>
                                <h3>{currencySymbol}{priceRange.min.toLocaleString()} - {currencySymbol}{priceRange.max.toLocaleString()}</h3>
                            </div>
                            {showPriceRange ? <KeyboardArrowUp className="rightIcon"/> : <KeyboardArrowDown className="rightIcon"/>}
                        </button>
                    </div>
                </div>
                <button className="search-button" onClick={this.search}>Search</button>

                <button className="mobile sales-button"><Link to="/sales">Sales</Link></button>
                <button className="mobile rentals-button"><Link to="/rentals">Rentals</Link></button>
            </div>
        )
    }
}

export default Filter

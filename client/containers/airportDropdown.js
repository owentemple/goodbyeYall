'use strict'
import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {SET_AIRPORT, setAirport} from '../actions/setAirport';

class AirportDropdown extends React.Component {
	render(){
		return (
			<NavDropdown className="navbar-button" eventKey={4} title="Set your airport" id="basic-nav-dropdown">
        <MenuItem eventKey={4.1} onClick={this.props.setAirport.bind(null, "DFWA-sky")}><div className="navbar-button">DFWA-sky</div></MenuItem>
        <MenuItem eventKey={4.2} onClick={this.props.setAirport.bind(null, "HOUA-sky")}><div className="navbar-button">HOUA-sky</div></MenuItem>
      </NavDropdown>
      )
	}
}

function mapDispatchToProps( dispatch ){
  return bindActionCreators({setAirport: setAirport}, dispatch)
}


export default connect(null, mapDispatchToProps)(AirportDropdown);
import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

// Import your logo image here
import Logo from './LionsLogo.jpeg';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar
                    className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
                    container
                    dark // Add 'dark' to make the navbar dark blue
                    style={{ backgroundColor: '#002366' }} // Customize the background color
                >
                    {/* Logo and Lion Loans */}
                    <NavbarBrand tag={Link} to="/LoginPage" className="d-flex align-items-center">
                        <img src={Logo} alt="Lion Loans" style={{ height: '30px', marginRight: '10px' }} />
                        <span style={{ fontSize: '1.2rem' }}>Lion Loans</span>
                    </NavbarBrand>

                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav" style={{ marginLeft: 'auto', marginRight: '15px' }}>
                            <NavItem style={{ margin: '0 5px' }}>
                                <NavLink tag={Link} className="text-light" to="/Home">Home</NavLink>
                            </NavItem>
                            <NavItem style={{ margin: '0 5px' }}>
                                <NavLink tag={Link} className="text-light" to="/counter">About</NavLink>
                            </NavItem>
                            <NavItem style={{ margin: '0 5px' }}>
                                <NavLink tag={Link} className="text-light" to="/LoanApplication">Loan Application</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}

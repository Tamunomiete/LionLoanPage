import React from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { useLocation } from 'react-router-dom';

export function Layout(props) {
    const location = useLocation();

    // Add more routes where you want to hide the navigation menu
    const hideNavMenuRoutes = ['/LoginPage','/CreateUser']; // Add the paths of pages where you want to hide the NavMenu

    // Conditionally render the navigation menu based on the current route
    const renderNavMenu = !hideNavMenuRoutes.includes(location.pathname);

    return (
        <div>
            {renderNavMenu && <NavMenu />}
            <Container>
                {props.children}
            </Container>
        </div>
    );
}

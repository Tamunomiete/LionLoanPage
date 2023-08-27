import React from 'react';
import { Counter } from "./components/Counter";
import CreateUser from "./components/CreateUser";
import { FetchData } from "./components/FetchData";
import Home from './components/Home';
import LoanApplication from "./components/LoanApplication";
import LoginPage from "./components/LoginPage";

const AppRoutes = [
    {
        path: '/Home',
        element: <Home />,
        isPrivate: true,
    },
    {
        path: '/counter',
        element: <Counter />,
        isPrivate: true,
    },
    {
        path: '/fetch-data',
        element: <FetchData />,
        isPrivate: true,
    },
    {
        path: '/LoanApplication',
        element: <LoanApplication />,
        isPrivate: true,
    },
    {
        path: '/LoginPage',
        element: <LoginPage />,
        isPrivate: false, // Set this to false to make the login page public
    },
    {
        path: '/CreateUser',
        element: <CreateUser />,
        isPrivate: false, // Set this to false to make the create user page public
    },
];

export default AppRoutes;

import React from "react";
import {Link} from "react-router-dom";
import {routes} from "../Routes/Routes";

const Navigation = () => {
    return (
        <ul>
            <Link to="/">home</Link>
            <Link to={routes.cart}>cart</Link>
            <Link to={routes.form}>form</Link>
        </ul>
    );
};

export default Navigation;
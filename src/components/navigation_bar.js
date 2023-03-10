import React, { Children } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


export default function NavigationBar() {
    return (
        <nav className="navigationBar">
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/newsletter">Newsletter</CustomLink>
                <CustomLink to="/results">Results</CustomLink>
                <CustomLink to="/teams">Teams</CustomLink>
            </ul>
            <ul>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/signup">Sign up</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}
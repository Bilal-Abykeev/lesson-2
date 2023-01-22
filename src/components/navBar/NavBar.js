import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function NavBar () {

    return (
        <ul style={{
            display: 'flex',
            listStyleType: 'none',
            width: '40%',
            justifyContent: 'space-between'
        }}>
            <li>
                <NavLink to="/">main page</NavLink>
            </li>
            <li>
                <NavLink to="/contacts">contacts page</NavLink>
            </li>
            <li>
                <NavLink to="/about">about page</NavLink>
            </li>
        </ul>
    )
}
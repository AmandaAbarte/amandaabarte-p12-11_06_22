import React from "react";
import logo from '../assets/logo.png'

export default function Nav() {
    return (
        <header>
            <nav>

                <ul>
                    <img src={logo} alt="sportsee logo"></img>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Community</li>
                </ul>
            </nav>
        </header>
    )
}
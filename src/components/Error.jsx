import React from "react";

export default function Error() {
    return (
        <div className="error-container">
            <h1>No user found</h1>
            <p>Please navigate to</p>
            <a href="/user/12">User 12</a>
            <p>or</p>
            <a href="/user/18">User 18</a>
        </div>
    )
}
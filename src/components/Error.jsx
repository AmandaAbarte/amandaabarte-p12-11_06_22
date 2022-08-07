import React from "react";

export default function Error() {
    return (
        <div className="error-container">
            <h1>No user found</h1>
            <p>Please navigate to</p>
            
            <p><a href="/user/12">User 12</a> or <a href="/user/18">User 18</a></p>
            
        </div>
    )
}
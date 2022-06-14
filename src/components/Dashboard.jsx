import React from "react";
import ChartOne from "./ChartOne";

export default function Dashboard() {
    return (
        <main>
            <div className="welcome">
                <h1>Hello Name</h1>
                <p>congrats message</p>
            </div>
            <div className="activity-container">
                <ChartOne/>
            </div>
        </main>
    )
}
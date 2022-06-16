import React from "react";
import ChartOne from "./ChartOne";

export default function Dashboard(props) {
    return (
        <main>
            <div className="welcome">
                <h1>Hello {props.user.data.userInfos.firstName}</h1>
                <p>congrats message</p>
            </div>
            <div className="activity-container">
                <ChartOne/>
            </div>
        </main>
    )
}
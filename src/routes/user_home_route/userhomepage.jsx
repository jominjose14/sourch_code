import React from "react";

const UserHomePage = (props) => {
    return(
        <div className={"userhomepage"}>
            <h1>Welcome Home User</h1>
            <button onClick={() => props.history.goBack()}>Sign Out</button>
        </div>
    );
}

export default UserHomePage;
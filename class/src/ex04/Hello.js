import React from "react";

function Hello(props){
    return(
        <h1>{`${props.children}, 안녕하세요`}</h1>
    );
}

export default Hello;
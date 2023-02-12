import React from "react";

function Post(props) {
    return(
        <div className='container' value={props.key}>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.body};
            </p>
        </div>
    );
}

export default Post;
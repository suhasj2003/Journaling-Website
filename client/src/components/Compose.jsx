import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './partials/Header'
import Footer from './partials/Footer'

function Compose() {    

    const {titleValue, setTitleValue} = useState("");
    const {bodyValue, setBodyValue} = useState("");

    function updateTitle(event) {
        setTitleValue(event.target.value);
    }

    function updateBody(event) {
        setBodyValue(event.target.value);
    }

    async function handleSubmit(event) {
        const response = await axios.post(
            "http://localhost:8080/api/v1/post/", 
                {title: titleValue, body: bodyValue}, 
            {headers: {"Content-Type": "application/json"}}
        );
        
        // if (response.status === 201) {
        //     window.location.href = "/";
        // } else {
        //     window.location.reload();
        // }
    }

    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <h1>Compose</h1>
                <form className="" action={(event) => handleSubmit} method="post">
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" type="text" name="postTitle" value={titleValue} onChange={(event) => updateTitle} />
                        <label>Post</label>
                        <textarea className="form-control" name="postBody" rows="5" cols="30" value={bodyValue} onChange={(event) => updateBody}></textarea>
                    
                    <button className="btn btn-primary" type="submit" name="button">Publish</button>
                    </div>
                </form>
            </div>
            <Footer />
        </React.Fragment>

    );
}

export default Compose;
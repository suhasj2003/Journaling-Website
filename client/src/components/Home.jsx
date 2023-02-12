import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Post from './Post';



function Home() {
    const location = useLocation();

    const [posts, setPosts] = useState([{id: -2, title: "Home", body: "Example"}, {id: -1, title: "Test", body: "Hello World!"}]);

    useEffect(() => {
        
        axios({method: "get", url: "http://localhost:8080/api/v1/post/"}, {headers: {"Content-Type": "application/json"}})
            .then(response => response.data)
            .then(data => {
                console.log(data);
                setPosts([...data]);
            });

    }, [location]);

    return(
        <React.Fragment>
            <Header />

                {
                    posts.map(post => 
                            
                       <Post key={post.id} title={post.title} body={post.body} />
                            
                    )
                }

            <Footer />
        </React.Fragment>
    );
}

export default Home;
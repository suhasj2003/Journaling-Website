import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

function About() {
    return(
        <React.Fragment>
            <Header />

            <div className="container">
                <h1>
                    About
                </h1>

                <p>
                    Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </p>
            </div>

            <Footer />
        </React.Fragment>
    );
}

export default About;
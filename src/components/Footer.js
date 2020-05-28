import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <footer className="row footer-container">
                <div className="col-sm-12 col-md-4">
                    @Copyright Mikey Moose 2020
                    <hr/>
                    Remote Software Developer
                </div>
                <div className="col-sm-12 col-md-8">
                    <p>Email: mikeymoose@email.com</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
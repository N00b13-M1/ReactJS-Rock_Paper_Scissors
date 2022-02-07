import React, { Component } from 'react';
import '../css/Footer.css'
import Modal from './Modal';

class Footer extends Component {
    render() {
        return (
            <>
                <div className="row d-flex justify-content-lg-end justify-content-md-end justify-content-center">
                    <div className="footer col-md-2 col-lg-2 col-12 p-0">
                        <button className="text-white bg-transparent">
                            RULES
                        </button>
                    </div>
                    <Modal />
                </div>
            </>
        );
    }
}

export default Footer;
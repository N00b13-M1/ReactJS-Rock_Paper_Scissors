import React, { Component } from 'react';
import '../css/Modal.css'

class Modal extends Component {
    
    render() {
        return (
            <>
                <div className="modal-container">
                    <div className="modal-box">
                        <div className="modal_header">
                            <h2>Rules</h2>
                            <button type="submit" onClick={() => {
                                let modal = document.getElementsByClassName('modal-container')[0];
                                modal.classList.add("d-none")
                                modal.classList.remove("modal-container")
                                console.log(modal)
                            }}>
                                <img src="./img/icon-close.svg" className="img-fluid" alt="X" />
                            </button>
                        </div>
                        <img src="./img/image-rules.svg" className="img-fluid" alt="rules" />
                    </div>
                </div>
            </>
        );
    }
}

export default Modal;
import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <>
                <div className="modal-container">
                    <div className="modal-box">
                        <div className="modal_header">
                            <h1>Rules</h1>
                            <button type="submit">
                                <img src="./img/icon-close.svg" alt="X" />
                            </button>
                            <img src="./img/image-rules.svg" alt="rules" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Modal;
import React, { Component } from 'react';
import '../css/Header.css'

class Header extends Component {
    render() {
        return (
            <>
                <nav>
                    <div className="container-fluid title-bar p-3">
                        <div className="col-lg-3 col-md-3 col-4 div-left p-0">
                            <span className="title title1">
                                Rock
                            </span>
                            <span className="title title2">
                                Paper
                            </span>
                            <span className="title title3">
                                Scissors
                            </span>
                        </div>
                        <div className="col-lg-3 col-md-3 col-4 div-right p-0">
                            <span className="score-text">
                                SCORE
                            </span>
                            {/* <div className="score-box_score"></div> */}
                            <span className="score-digit">
                                {this.props.score}
                            </span>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import '../css/Body.css'
import Header from './Header';
import Footer from './Footer';



class Body extends Component {
    state ={
        score: 0,
        gagnant: "",
        choix: "",
        choixOrdi: "",
        etape: "1",
        modal: false
    }

    showModal = () => {
        let copyState = {...this.state}
        copyState.modal = !copyState.modal
        this.setState(copyState)
    }

    choix = (choice) => {
        let choix = {...this.state}
        choix.choix = choice
        choix.etape = "2"
        this.setState(choix)
        console.log(choix);
    }


    render() {
        return (
            <>
            <Header score={this.state.score}/>
                {this.state.etape === "1" &&
                <div className="body">
                    <img src="./img/bg-triangle.svg" alt="Triangle" className="img-fluid" />
                    
                    <div className="button border1">
                        <button className="border paper rounded-circle" onClick={() => this.choix("paper")}>
                            <img src="./img/icon-paper.svg" alt="paper" className="img-fluid" />
                        </button>
                    </div>
                    <div className="button border2">
                        <button className="border rock rounded-circle" onClick={() => this.choix("rock")}>
                            <img src="./img/icon-rock.svg" alt="rock" className="img-fluid" />
                        </button>
                    </div>
                    <div className="button border3">
                        <button className="border scissors rounded-circle" onClick={() => this.choix("scissors")}>
                            <img src="./img/icon-scissors.svg" alt="scissors" className="img-fluid" />
                        </button>
                    </div>
                </div>
            }
            {this.state.etape === "2" &&
            // <div className="body-2"> 
            //     <div className="circle-left border border-2 rounded-circle d-inline">
            //         test
            //     </div>
            //     <div className="circle-right border border-2 rounded-circle d-inline">
            //         test
            //     </div>
            // </div>
                <div className="body-2 row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-12 justify-content-center align-items-center text-center">
                        <div className="circle-right">
                            test
                        </div>
                        <h5>YOU PICKED</h5>

                    </div>
                    <div className="col-lg-6 col-md-6 col-12 justify-content-center align-items-center text-center">
                    <div className="circle-right">
                            test
                        </div>
                        <h5>THE HOUSE PICKED</h5>
                    </div>
                </div>
            }
        <Footer modal={this.state.modal} showModal={this.showModal}/>

            </>
        );
    }
}

export default Body;

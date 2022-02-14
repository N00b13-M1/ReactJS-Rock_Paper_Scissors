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

    validate = () => {
        let possibilities = ["paper", "rock", "scissors"]
        let copyState = { ...this.state }
        copyState.choixOrdi = possibilities[Math.floor(Math.random() * possibilities.length)]
        if (copyState.choix === "paper" && copyState.choixOrdi === "rock") {
            copyState.gagnant = "Michael"
            copyState.score++
        } else if (copyState.choix === "rock" && copyState.choixOrdi === "scissors") {
            copyState.gagnant = "Michael"
            copyState.score++
        } else if (copyState.choix === "scissors" && copyState.choixOrdi === "paper") {
            copyState.gagnant = "Michael"
            copyState.score++
        } else if (copyState.choixOrdi === "paper" && copyState.choix === "rock") {
            copyState.gagnant = "Computer"
            copyState.score--
        } else if (copyState.choixOrdi === "rock" && copyState.choix === "scissors") {
            copyState.gagnant = "Computer"
            copyState.score--
        } else if (copyState.choixOrdi === "scissors" && copyState.choix === "paper") {
            copyState.gagnant = "Computer"
            copyState.score--
        } else {
            copyState.gagnant = "Draw"
        }

        this.setState(copyState)
    }
    playAgain = () => {
        let copyState = { ...this.state }
        copyState.etape = "1"
        copyState.gagnant = ""
        copyState.choix = ""
        copyState.choixOrdi = ""
        this.setState(copyState)
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
                    <div className="body-2 row container-fluid d-flex mx-auto justify-content-center align-items-center p-0">
                        <div className="column1 col-6 justify-content-center align-items-center text-center px-2">
                            {
                                this.state.choix === "paper" &&

                            <div className="button border1 my-3">
                                <button className="border paper rounded-circle">
                                    <img src="./img/icon-paper.svg" alt="paper" className="img-fluid" />
                                </button>
                            </div>

                            }
                            {
                                this.state.choix=== "rock" &&
                            <div className="button border2 my-3">
                                <button className="border rock rounded-circle">
                                    <img src="./img/icon-rock.svg" alt="rock" className="img-fluid" />
                                </button>
                            </div>
                            }
                            {
                                this.state.choix === "scissors" &&
                            <div className="button border3 my-3">
                                <button className="border scissors rounded-circle">
                                    <img src="./img/icon-scissors.svg" alt="scissors" className="img-fluid" />
                                </button>
                            </div>
                            }
                            <h5 className="my-3">YOU PICKED</h5>
                        </div>
                    <div className="column2 col-6 justify-content-center align-items-center text-center px-2">
                        {
                            this.state.choixOrdi === "paper" &&
                            <div className="button border1 my-3">
                                <button className="border paper rounded-circle">
                                    <img src="./img/icon-paper.svg" alt="paper" className="img-fluid" />
                                </button>
                            </div>
                        }
                        {
                            this.state.choixOrdi === "rock" &&
                            <div className="button border2 my-3">
                                <button className="border rock rounded-circle">
                                    <img src="./img/icon-rock.svg" alt="rock" className="img-fluid" />
                                </button>
                            </div>
                        }
                        {
                            this.state.choixOrdi === "scissors" &&
                            <div className="button border3 my-3">
                                <button className="border scissors rounded-circle">
                                    <img src="./img/icon-scissors.svg" alt="scissors" className="img-fluid" />
                                </button>
                            </div>
                        }
                        {
                            this.state.choixOrdi === "" &&
                            <div className="button border4 my-3">
                                {/* <button className="border scissors rounded-circle">
                                    <img src="./img/icon-scissors.svg" alt="scissors" className="img-fluid" />
                                </button> */}
                            </div>
                        }
                        <h5 className="my-3">THE HOUSE PICKED</h5>
                    </div>
                    {this.state.choixOrdi === "" 
                    ?
                    <div className="row">
                        <button className="buttonPlay mx-auto" onClick={this.validate}>Validate</button>
                    </div>
                    : 
                    <div className="row">
                        <button className="buttonPlay mx-auto" onClick={this.playAgain}>Play again</button>
                    </div>
                    }
                </div>
                }
        <Footer modal={this.state.modal} showModal={this.showModal}/>

            </>
        );
    }
}

export default Body;

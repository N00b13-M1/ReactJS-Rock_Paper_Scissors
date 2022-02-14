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
        let possibilite = ["paper", "rock", "scissors"]
        let stateCopy = { ...this.state }
        stateCopy.choixOrdi = possibilite[Math.floor(Math.random() * possibilite.length)]
        if (stateCopy.choix === "paper" && stateCopy.choixOrdi === "rock") {
            stateCopy.gagnant = "Michael"
            stateCopy.score++
        } else if (stateCopy.choix === "rock" && stateCopy.choixOrdi === "scissors") {
            stateCopy.gagnant = "Michael"
            stateCopy.score++
        } else if (stateCopy.choix === "scissors" && stateCopy.choixOrdi === "paper") {
            stateCopy.gagnant = "Michael"
            stateCopy.score++
        } else if (stateCopy.choixOrdi === "paper" && stateCopy.choix === "rock") {
            stateCopy.gagnant = "Computer"
            stateCopy.score--
        } else if (stateCopy.choixOrdi === "rock" && stateCopy.choix === "scissors") {
            stateCopy.gagnant = "Computer"
            stateCopy.score--
        } else if (stateCopy.choixOrdi === "scissors" && stateCopy.choix === "paper") {
            stateCopy.gagnant = "Computer"
            stateCopy.score--
        } else {
            stateCopy.gagnant = "Draw"
        }

        this.setState(stateCopy)
    }
    playAgain = () => {
        let stateCopy = { ...this.state }
        stateCopy.etape = "1"
        stateCopy.gagnant = ""
        stateCopy.choix = ""
        stateCopy.choixOrdi = ""
        this.setState(stateCopy)
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
                    <div className="body-2 container-fluid d-flex justify-content-center align-items-center">
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
                            <p></p>
                        }
                        <h5 className="my-3">THE HOUSE PICKED</h5>
                    </div>
                    {this.state.choixOrdi === "" ?
                    <button onClick={this.validate}>Validate</button>: <button onClick={this.playAgain}>Play again</button>}
                </div>
                }
        <Footer modal={this.state.modal} showModal={this.showModal}/>

            </>
        );
    }
}

export default Body;

import React, { Component } from 'react';
import '../css/Body.css'

// // function sayHello(){
// //     console.log('----------------');
// //     console.log('Hello');
// //     console.log('----------------');
// // }

// // sayHello();

// function salesTax(amount){
//     let result = amount * 0.21;
//     return result;
// }

// salesTax(100)
// console.log(salesTax(100))


class Body extends Component {
    render() {
        return (
            <>
                <div className="body">
                    <img src="./img/bg-triangle.svg" alt="Triangle" className="img-fluid" />
                    
                    <div className="button border1">
                        <button className="border paper rounded-circle">
                            <img src="./img/icon-paper.svg" alt="paper" className="img-fluid" />
                        </button>
                    </div>
                    <div className="button border2">
                        <button className="border rock rounded-circle">
                            <img src="./img/icon-rock.svg" alt="paper" className="img-fluid" />
                        </button>
                    </div>
                    <div className="button border3">
                        <button className="border scissors rounded-circle">
                            <img src="./img/icon-scissors.svg" alt="paper" className="img-fluid" />
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default Body;
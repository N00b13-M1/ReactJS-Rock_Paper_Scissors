// import React, {Component} from 'react';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body'
import Modal from './components/Modal'


import React from 'react'

function App() {
  return (
    <div>
      <div className="container-fluid">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </div>
  )
}

export default App

// class App extends Component {
//   render(){
//     return (
      
//     );
//   }
// }

// export default App;
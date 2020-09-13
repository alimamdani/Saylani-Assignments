import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    let firstName = "Ali Raza";
    let lastName = "Mamdani";
    let arr = [1 , 2 , 3 , 4 , 5]
    return (
      <div>
        <h1>{`${firstName} ${lastName}`}</h1>
        <h1>{arr}</h1>
      </div>
    )
  }
  
}
export default App;

import './App.css';
import PersonCard from '../PersonCard/PersonCard';
import { Component } from 'react';

// Ciclar y hacer una estructura de datos
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coleccionPersonas: [
        {
          name: "Alex",
          lastName: "Miller",
          age: 32,
          hairColor: "Brown"
        },
        {
          name: "María",
          lastName: "Perez",
          age: 27,
          hairColor: "Yellow"
        }
      ]
    }
  }
  birthDay = (index) => {
    const updatedCollection = this.state.coleccionPersonas.map((persona, i) => {
      if (i === index) {
        return {
          ...persona,
          age: persona.age + 1
        };
      }
      return persona;
    });
    this.setState({
      coleccionPersonas: updatedCollection
    });
  }
  render = () => {
    return (
    <div className="App">
      <ul>
        {this.state.coleccionPersonas.map((person, index) => {
          return <PersonCard key={index} index={index} birthDay={this.birthDay} name={person.name} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>
        })}
      </ul>
    </div>
  )}
}

export default App;

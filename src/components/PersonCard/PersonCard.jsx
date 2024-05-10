import { Component } from "react"
import './PersonCard.css'

class PersonCard extends Component {
    render = () => {
        const {index, name, lastName, age, hairColor, birthDay} = this.props;
        return (
            <li className="PersonCard">
                <h2>{name}, {lastName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={() => {birthDay(index)}}>BirthDay Button for {name} {lastName}</button>
            </li>
        )
    }
}
export default PersonCard;
import React, { Component } from 'react';
import header from '../src/Ghibli.jpg';
import {Link} from 'react-router-dom';

class PeopleStyle extends Component {
    render() {
        return (

            <div className="col-12 col-sm-6 col-md-7 col-lg-4 my-4">
                <div className="card card-style">
                    <img className="card-img-top" src={header} alt="Card Top" />
                    <div className="card-body">
                        <h5 className="card-header">{this.props.name}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Age: {this.props.age}</li>
                            <li className="list-group-item">Gender: {this.props.gender}</li>
                            <li className="list-group-item">Hair Color: {this.props.hair_color}</li>
                            <li className="list-group-item">Eye Color: {this.props.eye_color}</li>
                            <Link className="d-block btn btn-primary mt-2" to={"/people/" + this.props.link}>Show Only This Person</Link>
                            <li className="list-group-item text-center"><a href={"http://ghibliapi.herokuapp.com/people/" + this.props.link} target="_blank" className="btn btn-secondary mt-2">Go to JSON</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default PeopleStyle;
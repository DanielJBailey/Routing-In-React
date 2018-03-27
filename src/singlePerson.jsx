import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import header from '../src/Ghibli.jpg';

class singlePerson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            objects: []
        }
    }

    componentDidMount() {
        let url = "http://ghibliapi.herokuapp.com/people/" + this.props.match.params.id;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(object => this.setState({ objects: object }))
    }

    render() {
        return (
            
            
            <div className="col-12 col-sm-6 col-md-7 col-lg-4 my-4">
                <div className="card card-style">
                    <img className="card-img-top" src={header} alt="Card Top" />
                    <div className="card-body">
                        <h5 className="card-header">{this.state.objects.name}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Age: {this.state.objects.age}</li>
                            <li className="list-group-item">Gender: {this.state.objects.gender}</li>
                            <li className="list-group-item">Hair Color: {this.state.objects.hair_color}</li>
                            <li className="list-group-item">Eye Color: {this.state.objects.eye_color}</li>
                            <li className="list-group-item text-center"><a href={"http://ghibliapi.herokuapp.com/people/" + this.state.objects.link} target="_blank" className="btn btn-secondary mt-2">Go to JSON</a></li>
                            <Link className="d-block btn btn-primary mt-2" to="/people/">View All People</Link>
                        </ul>
                    </div>
                </div>

            </div>
          
        )
    }
}

export default singlePerson;
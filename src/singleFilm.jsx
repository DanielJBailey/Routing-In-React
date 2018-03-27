import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import header from '../src/studio.png';

class singleFilm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            objects: []
        }
    }

    componentDidMount() {
        let url = "http://ghibliapi.herokuapp.com/films/" + this.props.match.params.id;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(object => this.setState({ objects: object }))
    }

    render() {
        return (
            
            
                <div className="card card-style single">
                    <img className="card-img-top" src={header} alt="Card Top" />
                    <div className="card-body">
                        <h5 className="card-title card-header">{this.state.objects.title}</h5>
                        <p className="card-text text-muted desc p-2"> {this.state.objects.description}</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Director: {this.state.objects.director}</li>
                            <li className="list-group-item">Producer: {this.state.objects.producer}</li>
                            <li className="list-group-item text-muted score">{this.state.objects.release_date} | Rotten Tomatoes: {this.state.objects.rt_score}</li>
                            <Link className="d-block btn btn-primary mt-2" to="/films/">View All Films</Link>
                        </ul>
                    </div>
                </div>
          
        )
    }
}

export default singleFilm;
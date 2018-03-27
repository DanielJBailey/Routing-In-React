import React from 'react';
import header from '../src/studio.png';
import { Link } from 'react-router-dom';

class FilmStyle extends React.Component {

    render() {
        return (
        
            
            <div className="col-md-4 mb-4">
                <div className="card card-style">
                    <img className="card-img-top" src={header} alt="Card Top" />
                    <div className="card-body">
                        <h5 className="card-title card-header">{this.props.title}</h5>
                        <p className = "card-text text-muted desc p-2"> { this.props.desc }</p>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">Director: { this.props.dir }</li>
                        <li className="list-group-item">Producer: { this.props.prod }</li>
                        <li className="list-group-item text-muted score">{ this.props.released } | Rotten Tomatoes: { this.props.rt_score }</li>
                        <Link className="d-block btn btn-primary mt-2" to={"/films/" + this.props.link}>Show Only This Film</Link>
                        </ul>
                    </div>
                </div>
            </div>
    )


    }
    
}

export default FilmStyle;
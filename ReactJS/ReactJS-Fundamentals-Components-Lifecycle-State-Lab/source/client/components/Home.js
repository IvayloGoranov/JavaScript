import React from 'react';
import MovieCard from "./subcomponents/MovieCard";

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            topTenMovies: [],
            error: ''
        };
    };

    render() {
        let topTenMovies = this.state.topTenMovies.map((movie) => {
            return (
                <MovieCard key={movie._id} movie={movie} index={movie._id}/>
            );
        });

        return (
            <div className="container">
                <h3 className="text-center"> Welcome to
                    <strong>Movie Database</strong>
                </h3>
                <div className="list-group">
                    {topTenMovies}
                </div>
            </div>
        );
    };

    componentDidMount(){
        let request = {
            method: 'get',
            url: 'api/movies/top-ten'
        };

        $.ajax(request)
            .done((data) => {
                this.setState({
                    topTenMovies: data
                });
            })
            .fail((err) => {
                this.setState({
                    error: err.responseJSON.message
                });
            });
    };
};

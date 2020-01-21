import React, {Component} from 'react';
import './movieDetail.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class MovieDetail extends Component {

    state = {
        onGoingRequest: true
    }
    componentWillMount = () => {
        // const todoId = this.props.match.params.id; axios
        // .get(`${environment.baseUrl}/api/todo/getTodoById/${todoId}`) .then(result =>
        // {         const todo = result.data.todo; this.setState({
        //             todoDetails: result.data.todo,             date: new
        // Date(todo.date),             title: todo.title,             status:
        // todo.status,             onGoingRequest: false         });
        // this.forceUpdate();         this.validate();     })     .catch(err => {
        // this.setState({onGoingRequest: false})     });
    }

    bookMovie = () => {
        console.log(this.props)
        this.props.history.push(`/movie/${this.props.match.params.movieName}/${this.props.match.params.id}/book-tickets`);
    }
    render() {
        return (
            <div>
                <div className="banner-synopsis">
                    <div className="cover-image"></div>
                    <div className="banner-overlay"></div>
                </div>
                <div className="movie-detail-container">
                    <div className="movie-poster">
                        <div className="movie-background"></div>
                        
                    </div>
                    <div className="movie-details">
                        <div className="movie-block">
                            <div className="movie-name">Man of steel
                                <span onClick={this.bookMovie} className="book-tickets-btn btn glow">Book</span>
                            </div>
                            <div className="breadcrumbs">
                                Sci-fi / English / 2016 / 1h 59m
                            </div>
                            <div className="display-flex">
                                <div className="ratings-block">
                                    <span className="font-22 rating">
                                        <Rater rating={4} total={5} interactive={false}/>
                                    </span>
                                    &nbsp;
                                    <span className="rating-number">4.0</span>
                                </div>
                                <div className="other-details">
                                    SCI-Fi &nbsp; 3D/2D &nbsp; English
                                </div>
                            </div>
                            <div className="release-date-block">
                                <div className="box glow">
                                    <div className="date-day">30</div>
                                    <div className="divider"></div>
                                    <div className="date-month-year">Nov &nbsp; 2016</div>
                                </div>
                            </div>
                            <div className="play-trailer-block glow">
                                <span className="play-box">
                                    <i className="fa fa-play clr-white" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                        <div className="allow-scroll">
                            <div className="casting">
                                <div className="title">THE CAST</div>
                                <div className="actors-list">
                                    <div className="actor">
                                        <div className="actor-image"></div>
                                        <div className="actor-name">Henry Cavill</div>
                                    </div>
                                    <div className="actor">
                                        <div className="actor-image"></div>
                                        <div className="actor-name">Amy Adams</div>
                                    </div>
                                    <div className="actor">
                                        <div className="actor-image"></div>
                                        <div className="actor-name">Michael Shannon</div>
                                    </div>
                                    <div className="actor">
                                        <div className="actor-image"></div>
                                        <div className="actor-name">Kevin Costner</div>
                                    </div>
                                    <div className="actor">
                                        <div className="actor-image"></div>
                                        <div className="actor-name">Diane Lane</div>
                                    </div>
                                    <div className="actor other-actors">
                                        <div className="actor-image"></div>
                                        <div className="actor-name">+5</div>
                                    </div>
                                </div>
                            </div>
                            <div className="synopsis">
                                <div className="title">synopsis</div>
                                <div className="synopsis-text">
                                    Man of Steel is a reboot of the Superman film series that portrays the
                                    character's origin story. In the film, Clark Kent learns that he is a
                                    superpowered alien from the planet Krypton. He assumes the role of mankind's
                                    protector as Superman, making the choice to face General Zod and prevent him
                                    from destroying humanity.
                                </div>
                            </div>

                            <div className="videos-pictures">
                                <div className="title">video / pictures</div>
                                <div className="video-list">
                                    <div className="list">
                                        <video width="100%" height="100%" controls>
                                            <source src="movie.mp4" type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div className="list">
                                        <div className="movie-pictures list-image-1"></div>
                                    </div>
                                    <div className="list">
                                        <div className="movie-pictures list-image-2"></div>
                                    </div>
                                    <div className="list">
                                        <div className="movie-pictures list-image-3"></div>
                                    </div>
                                    <div className="list">
                                        <div className="movie-pictures list-image-4"></div>
                                    </div>
                                    <div className="list">
                                        <div className="movie-pictures list-image-5">
                                            <span className="last-video-list">+18 Others</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetail

import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom'; import {environment} from
// '../../environment' import axios from '../../services/axios';
import './home.scss';
// import { toast } from 'react-toastify';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class Home extends Component {
    genres = [
        {
            id: 1,
            value: 'action',
            isChecked: false
        }, {
            id: 2,
            value: 'adventure',
            isChecked: false
        }, {
            id: 3,
            value: 'animation',
            isChecked: false
        }, {
            id: 4,
            value: 'biography',
            isChecked: false
        }, {
            id: 5,
            value: 'classic',
            isChecked: false
        }, {
            id: 6,
            value: 'comedy',
            isChecked: false
        }, {
            id: 7,
            value: 'crime',
            isChecked: false
        }, {
            id: 8,
            value: 'drama',
            isChecked: false
        }, {
            id: 9,
            value: 'fantasy',
            isChecked: false
        }, {
            id: 10,
            value: 'romantic',
            isChecked: false
        }, {
            id: 11,
            value: 'thriller',
            isChecked: false
        }, {
            id: 12,
            value: 'sci-fi',
            isChecked: false
        }
    ];
    formats = [
        {
            id: 1,
            value: '2D',
            isChecked: false
        }, {
            id: 2,
            value: '3D',
            isChecked: false
        }
    ];
    languages = [
        {
            id: 1,
            value: 'hindi',
            isChecked: false
        }, {
            id: 2,
            value: 'english',
            isChecked: false
        }
    ];
    state = {
        genres: this.genres,
        formats: this.formats,
        languages: this.languages,
        showLanguage: true,
        showFormat: true,
        showGenre: true,
        onGoingRequest: true
    }

    // routeChange = () => {     let path = 'createtodo';     this         .props
    // .history         .push(path); }

    componentWillMount() {}

    handleCheckedElement = (value, filterBy) => {
        let data = this.state[filterBy];
        data.forEach(d => {
            if (d.value === value) {
                d.isChecked = !d.isChecked;
            }
        });
        let states = {};
        states[filterBy] = data;
        this.setState(states);
        console.log(this.state[filterBy]);
    }

    slugify = (text) => {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    }

    viewMovieDetails = (movieName, id) => {
        this.props.history.push(`movie/${this.slugify(movieName)}/${id}`);
    }

    render() {

        return (
            <div className="container">
                <div className="side-view">
                    <div className="block-section">
                        <div
                            className="card"
                            onClick={() => this.setState({
                            showLanguage: !this.state.showLanguage
                        })}>
                            <div>
                                <i
                                    className={`fa ${this.state.showLanguage
                                    ? 'fa-angle-up'
                                    : 'fa-angle-down'} block-angles`}></i>
                                <span className="select-text">Select Language</span>
                            </div>
                        </div>
                        <div
                            className="list-view"
                            style={{
                            display: this.state.showLanguage
                                ? 'block'
                                : 'none'
                        }}>
                            <div>
                                <ul className="lists">
                                    {this
                                        .state
                                        .languages
                                        .map((language) => {
                                            return (
                                                <li
                                                    className="list-view-list"
                                                    key={language.id}
                                                    onClick={() => this.handleCheckedElement(language.value, 'languages')}>
                                                    <input type="checkbox" checked={language.isChecked} value={language.value}/>
                                                    <span className="select-text">
                                                        {language.value}
                                                    </span>
                                                </li>
                                            )
                                        })
}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="block-section">
                        <div
                            className="card"
                            onClick={() => this.setState({
                            showFormat: !this.state.showFormat
                        })}>
                            <div>
                                <i
                                    className={`fa ${this.state.showFormat
                                    ? 'fa-angle-up'
                                    : 'fa-angle-down'} block-angles`}></i>
                                <span className="select-text">Select Format</span>
                            </div>
                        </div>
                        <div
                            className="list-view"
                            style={{
                            display: this.state.showFormat
                                ? 'block'
                                : 'none'
                        }}>
                            <div>
                                <ul className="lists">
                                    {this
                                        .state
                                        .formats
                                        .map((format) => {
                                            return (
                                                <li
                                                    className="list-view-list"
                                                    key={format.id}
                                                    onClick={() => this.handleCheckedElement(format.value, 'formats')}>
                                                    <input type="checkbox" checked={format.isChecked} value={format.value}/>
                                                    <span className="select-text">
                                                        {format.value}
                                                    </span>
                                                </li>
                                            )
                                        })
}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="block-section">
                        <div
                            className="card"
                            onClick={() => this.setState({
                            showGenre: !this.state.showGenre
                        })}>
                            <div>
                                <i
                                    className={`fa ${this.state.showGenre
                                    ? 'fa-angle-up'
                                    : 'fa-angle-down'} block-angles`}></i>
                                <span className="select-text">Select Genres</span>
                            </div>
                        </div>
                        <div
                            className="list-view"
                            style={{
                            display: this.state.showGenre
                                ? 'block'
                                : 'none'
                        }}>
                            <div>
                                <ul className="lists">
                                    {this
                                        .state
                                        .genres
                                        .map((genre) => {
                                            return (
                                                <li
                                                    className="list-view-list"
                                                    key={genre.id}
                                                    onClick={() => this.handleCheckedElement(genre.value, 'genres')}>
                                                    <input type="checkbox" checked={genre.isChecked} value={genre.value}/>
                                                    <span className="select-text">
                                                        {genre.value}
                                                    </span>
                                                </li>
                                            )
                                        })
}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="main-view">
                    <div className="movie-container">

                        <div className="movie-card">
                            <div className="movie-header manOfSteel"></div>
                            <div className="movie-content">
                                <div className="movie-content-header">
                                    <span>
                                        <h3 className="movie-title">Man of Steel</h3>
                                    </span>
                                    <div className="movie-screen">3D/2D</div>
                                </div>
                                <div className="movie-info">
                                    <div className="info-section">
                                        <label>Ratings</label>
                                        <span>
                                            <Rater rating={4} total={5} interactive={false}/>
                                        </span>
                                    </div>
                                    <div className="info-section">
                                        <label>Info</label>
                                        <span>UA
                                            <span className="movie-detail-divider">-</span>
                                            Hindi, English</span>
                                    </div>
                                    <div className="info-section">
                                        <div className="btn btn-hover"  onClick={() => this.viewMovieDetails('Man of Steel', 1)}>
                                            view
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="movie-header theDarkTower"></div>
                            <div className="movie-content">
                                <div className="movie-content-header">
                                    <span>
                                        <h3 className="movie-title">The Dark Tower</h3>
                                    </span>
                                    <div className="movie-screen">3D/2D</div>
                                </div>
                                <div className="movie-info">
                                    <div className="info-section">
                                        <label>Ratings</label>
                                        <span>
                                            <Rater rating={2} total={5} interactive={false}/>
                                        </span>
                                    </div>
                                    <div className="info-section">
                                        <label>Info</label>
                                        <span>UA
                                            <span className="movie-detail-divider">-</span>
                                            Hindi</span>
                                    </div>
                                    <div className="info-section">
                                        <div className="btn btn-hover" onClick={() => this.viewMovieDetails('The Dark Tower', 2)}>
                                            view
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-card">
                            <div className="movie-header bladeRunner2049"></div>
                            <div className="movie-content">
                                <div className="movie-content-header">
                                    <span>
                                        <h3 className="movie-title">Blade Runner 2049</h3>
                                    </span>
                                    <div className="movie-screen">3D/2D</div>
                                </div>
                                <div className="movie-info">
                                    <div className="info-section">
                                        <label>Ratings</label>
                                        <span>
                                            <Rater rating={4.5} total={5} interactive={false}/>
                                        </span>
                                    </div>
                                    <div className="info-section">
                                        <label>Info</label>
                                        <span>UA
                                            <span className="movie-detail-divider">-</span>
                                            Hindi</span>
                                    </div>
                                    <div className="info-section">
                                        <div className="btn btn-hover view-btn"  onClick={() => this.viewMovieDetails('Blade Runner 2049', 3)}>
                                            view
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

export default Home

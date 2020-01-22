import React, {Component} from 'react';
import axios from '../../services/request/axios'
import './bookMovie.css';
import jwt from 'jsonwebtoken'
import * as $ from 'jquery';
class BookMovie extends Component {
    static days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ];
    state = {
        dateList: [
            {
                id: 1,
                date: new Date(),
                active: true
            }, {
                id: 2,
                date: new Date().setDate(new Date().getDate() + 1),
                active: false
            }, {
                id: 3,
                date: new Date().setDate(new Date().getDate() + 2),
                active: false
            }, {
                id: 4,
                date: new Date().setDate(new Date().getDate() + 3),
                active: false
            }, {
                id: 5,
                date: new Date().setDate(new Date().getDate() + 4),
                active: false
            }, {
                id: 6,
                date: new Date().setDate(new Date().getDate() + 5),
                active: false
            }, {
                id: 7,
                date: new Date().setDate(new Date().getDate() + 6),
                active: false
            }
        ]
    }

    componentDidMount() {
        console.log(BookMovie.days);
    }

    getDayName = (data) => {
        if (data.active) {
            return 'Today';
        } else {
            let d = new Date(data.date);
            return BookMovie.days[d.getDay()];
        }
    }
    scrollToDate = (arrow) => {
        let scrollArrow = arrow === 'left'? "-=": "+=";
        $(() => {
            $('.dates-block').animate({
                scrollLeft: scrollArrow+110
            }, "smooth");
        });
    }

    render() {

        return (
            <div className="book-movie-container">
                <div className="book-movie-box">
                    <div className="movies-details-box">
                        <div className="movie-detail-name">
                            <div className="name">
                                <span>Man of steel</span>
                            </div>
                            <div className="other">
                                <span className="categories">U/A</span>
                                <span className="tags">
                                    <span>SCI-Fi</span>
                                </span>
                                <span className="tags">
                                    <span>Adventure</span>
                                </span>
                                <span className="release-date">
                                    Jan 10, 2020
                                </span>
                                <span className="duration">
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                    <span>
                                        1h 29m</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="movies-cast-box">
                        <div className="cast-list-block">
                            <div>
                                <div className="cast-title">
                                    Director
                                </div>
                                <div>
                                    <div className="actor-image"></div>
                                    <div className="actor-name">Zack Snyder</div>
                                </div>
                            </div>
                        </div>
                        <div className="cast-list-block-list">
                            <div>
                                <div className="cast-title">
                                    Cast & Crew
                                </div>
                                <div className="grid-system">
                                    <div className="actor-image"></div>
                                    <div className="actor-name">Henry Cavill</div>
                                </div>
                                <div className="grid-system">
                                    <div className="actor-image"></div>
                                    <div className="actor-name">Amy Adams</div>
                                </div>
                                <div className="grid-system">
                                    <div className="actor-image"></div>
                                    <div className="actor-name">Michael Shannon</div>
                                </div>
                                <div className="grid-system">
                                    <div className="actor-image"></div>
                                    <div className="actor-name">Kevin Costner</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filters-block">
                    <div className="filter-by-date display-flex">
                        <i
                            className="fa fa-angle-left mg-rt-15 arrow-align-middle font-45"
                            onClick={() => this.scrollToDate('left')}></i>
                        <div className="dates-block display-flex">
                            <div className="scrolling-dates display-flex" id="scrolling-dates">
                                {this
                                    .state
                                    .dateList
                                    .map(list => {
                                        return (
                                            <div
                                                className={list.active
                                                ? 'date-list active'
                                                : 'date-list'}
                                                key={list.id}>
                                                <div className="date">
                                                    {new Date(list.date).getDate()}
                                                </div>
                                                <div className="day">
                                                    {this
                                                        .getDayName
                                                        .call(this, list)}
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                        <i
                            className="fa fa-angle-right mg-lft-20 arrow-align-middle font-45"
                            onClick={() => this.scrollToDate('right')}></i>

                    </div>
                    <div className="filter-by-others">
                        <div className="movie-screen">
                            <div className="width80 screen-print">Hindi - 2D</div><i className="fa fa-angle-down"></i>  
                            <ul className="list-none dropdown-ul">
                                <li>
                                    Hindi - 3D
                                </li>
                                <li>English</li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookMovie
import React, {Component} from 'react';
import axios from '../../services/request/axios'
import './bookMovie.scss';
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
        ],
        languageList: {
            active: 'Hindi - 2D',
            list: [
                {
                    id: 1,
                    name: 'English'
                }, {
                    id: 2,
                    name: 'Hindi - 3D'
                }, {
                    id: 3,
                    name: 'Hindi - 2D'
                }
            ]
        },
        languageToggle: false,
        regionList: [
            {
                id: 1,
                name: 'Thane',
                active: false
            }, {
                id: 2,
                name: 'Mumbai South Central',
                active: false
            }, {
                id: 3,
                name: 'Navi Mumbai',
                active: false
            }, {
                id: 4,
                name: 'kalyan',
                active: false
            }
        ],
        regionToggle: false,
        selectedRegion: ''
    }

    componentWillMount() {
        let text = this.getRegionText();
        this.setState({selectedRegion: text});
    }

    componentDidMount() {
        $(document).mouseup((e) => {
            let movieScreen = $(".movie-screen");

            // if the target of the click isn't the container nor a descendant of the
            // container
            if (!movieScreen.is(e.target) && movieScreen.has(e.target).length === 0) {
                this.setState({languageToggle: false});
            }
            let regionDropdown = $(".region-box");
            if (!regionDropdown.is(e.target) && regionDropdown.has(e.target).length === 0) {
                this.setState({regionToggle: false});
            }

        });
    }

    getDayName = (data) => {
        if (new Date(data.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)) {
            return 'Today';
        } else {
            let d = new Date(data.date);
            return BookMovie.days[d.getDay()];
        }
    }
    scrollToDate = (arrow) => {
        let scrollArrow = arrow === 'left'
            ? "-="
            : "+=";
        $(() => {
            $('.dates-block').animate({
                scrollLeft: scrollArrow + 110
            }, "smooth");
        });
    }
    changeSelectedDate = (list) => {
        let dateList = this.state.dateList;
        dateList.forEach(data => {
            data.active = data.id === list.id;
        });
        this.setState({dateList});
    }

    changeLanguage = (list) => {
        let newState = Object.assign({}, this.state)
        newState.languageList.active = list.name
        this.setState(newState);
        this.toggleLanguage();

    }

    changeRegions = (list) => {
        let data = this.state.regionList;
        let text = '';
        data.forEach(listObj => {
            if (listObj.id === list.id) {
                listObj.active = !listObj.active;
            }
        })
        console.log(data);
        this.setState({regionList: data});
        text = this.getRegionText();
        console.log(text);
        this.setState({selectedRegion: text});
        console.log(this.state)
    }

    toggleLanguage = () => {
        this.setState({
            languageToggle: !this.state.languageToggle
        })
        if (this.state.regionToggle) {
            this.toggleRegion();
        }
    }
    toggleRegion = () => {
        this.setState({
            regionToggle: !this.state.regionToggle
        })
        if (this.state.languageToggle) {
            this.toggleLanguage();
        }
    }

    getRegionText = () => {
        let index = this
            .state
            .regionList
            .findIndex(list => list.active === true);
        console.log(index);
        if (index > -1) {
            let text = [];
            this
                .state
                .regionList
                .forEach(list => {
                    if (list.active) {
                        text.push(text.length? ` ${list.name}`: list.name);
                    }
                })
            return text.join();
        } else {
            return 'Filter Sub Regions'
        }
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
                                                key={list.id}
                                                onClick={() => this.changeSelectedDate(list)}>
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
                        <div className="movie-screen" onClick={this.toggleLanguage}>
                            <div className="width80 screen-print">{this.state.languageList.active}</div>
                            <i
                                className={`fa fa-angle-down book-movie ${this.state.languageToggle
                                ? 'rotate'
                                : ''}`}></i>
                            <ul
                                className={this.state.languageToggle
                                ? "list-none dropdown-ul active"
                                : "list-none dropdown-ul"}>
                                {this
                                    .state
                                    .languageList
                                    .list
                                    .map(list => {
                                        if (list && list.name !== this.state.languageList.active) {
                                            return <li key={list.id} onClick={() => this.changeLanguage(list)}>{list.name}</li>
                                        }
                                    })}
                            </ul>
                        </div>
                        <div className="region-box">
                            <div
                                className="width80 region-box-title screen-print"
                                onClick={this.toggleRegion}>{this.state.selectedRegion}
                            </div>
                            <i
                                className={`fa fa-angle-down book-movie ${this.state.regionToggle
                                ? 'rotate'
                                : ''}`}></i>
                            <ul
                                className={this.state.regionToggle
                                ? "list-none dropdown-ul active"
                                : "list-none dropdown-ul"}>
                                {this
                                    .state
                                    .regionList
                                    .map(list => {
                                        return <li key={list.id} onClick={() => this.changeRegions(list)}>
                                            <input
                                                className="cursor-pointer"
                                                type="checkbox"
                                                checked={list.active}
                                                value={list.name}/>
                                            <span className="mg-left-5">{list.name}</span>
                                        </li>
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
                {this
                    .state
                    .selectedRegion
                    .toLowerCase() === 'Filter Sub Regions'.toLowerCase()
                    ? null
                    : <div className="selected-regions">
                        {this
                            .state
                            .regionList
                            .map(regionObj => {
                                if (regionObj.active) {
                                    return <div
                                        key={regionObj.id}
                                        className="region-name"
                                        onClick={() => this.changeRegions(regionObj)}>
                                        {regionObj.name}
                                        <i className="fa fa-times-circle region-close"></i>
                                    </div>
                                }
                            })}
                    </div>
}
                <div className="theatre-list-box">

                    <div className="theatre-list">
                        <div className="theatre-name-block">
                            <div className="text-center">
                                <i className="fa fa-heart clr-red"></i>
                            </div>
                            <div className="theatre-name">
                                Carnival: Huma, Kanjurmarg
                            </div>
                        </div>
                        <div className="theatre-timings-block">
                            <div className="timing-list">
                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">11:40AM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>

                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">01:00PM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>

                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">4:00PM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="theatre-list">
                        <div className="theatre-name-block">
                            <div className="text-center">
                                <i className="fa fa-heart clr-red"></i>
                            </div>
                            <div className="theatre-name">
                                Balaji Movieplex: Kopar Khairane
                            </div>
                        </div>
                        <div className="theatre-timings-block">
                            <div className="timing-list">
                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">12:15PM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>

                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">01:15PM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>

                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">3:00PM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>

                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">5:45PM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>

                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">7:00PM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="theatre-list">
                        <div className="theatre-name-block">
                            <div className="text-center">
                                <i className="fa fa-heart"></i>
                            </div>
                            <div className="theatre-name">
                                INOX: Palm Beach Galleria Mall, Navi Mumbai
                            </div>
                        </div>
                        <div className="theatre-timings-block">
                            <div className="timing-list">
                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">11:35AM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>

                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">12:15PM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>

                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">2:20PM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>

                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">5:10PM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>

                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">8:00PM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>

                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">10:10PM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
                                    </div>
                                </div>

                                <div className="timing-container">
                                    <div className="timing-pill">
                                        <div className="timing-details">
                                            <div className="timing-text">11:30PM</div>
                                        </div>
                                        <div className="timing-attribute"></div>
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

export default BookMovie
import React, {Component} from 'react';
import '../theatre-layout/theatre-layout.scss'
import {ShowTimeAppContext} from '../../react-context/show-time-app-context';
class TheatreLayout extends Component {
    render() {
        return (
            <div className="theatre-layout-container">
                <ShowTimeAppContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <div>
                                {context.state.seatData.isSeatSelected
                                    ? 
                                    <div>

                                    </div>
                                    : this
                                        .props
                                        .history
                                        .push(`/movie/${this.props.match.params.movieName}/${this.props.match.params.id}/book-tickets`)}
                            </div>
                        </React.Fragment>
                    )}
                </ShowTimeAppContext.Consumer>
            </div>
        )
    }
}
export default TheatreLayout;
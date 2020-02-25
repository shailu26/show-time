import React, {Component} from 'react';
import './admin-seat-layout.scss';

class AdminSeatLayout extends Component {
    state = {
        showModal: false,
        seatLayoutList: this.props.seatLayoutList
    }
    handleModal = (value) => {
        this.setState({showModal: value});
    }

    render() {
        return (
            <div className="seat-layout-container">
                <div className="actions-box txt-right">
                    <button
                        className={`btn ${this.state.showModal
                        ? 'disabled '
                        : ''}font-14`}
                        onClick={() => this.handleModal(true)}
                        disabled={this.state.showModal}>
                        <i className="fa fa-plus"></i>
                        &nbsp; Add Seat Chart
                    </button>
                </div>
                <div>
                    {!this.state.seatLayoutList.length && !this.state.showModal
                        ? <h3 className="text-center">No Seat Chart is there, Add Now</h3>
                        : null}
                </div>

                {this.state.showModal
                    ? <div>

                            <button className="btn font-14" onClick={() => this.handleModal(false)}>Save</button>
                            <button className="btn font-14" onClick={() => this.handleModal(false)}>
                                Cancel
                            </button>
                        </div>
                    : null}
            </div>
        )
    }
}
export default AdminSeatLayout;
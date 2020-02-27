import React, {Component} from 'react';
import './admin-seat-layout.scss';
import Modal from '../../modal/modal';
class AdminSeatLayout extends Component {
    state = {
        showForm: this.props.showSeatForm,
        seatLayoutList: this.props.seatLayoutList,
        nameInput: '',
        descriptionInput: ''
    }
    handleModal = (value) => {
        this.setState({showForm: value});
        this
            .props
            .setShowSeatForm(value);
    }
    onNameChange = (e) => {
        this.setState({nameInput: e.target.value});
    }
    onDescriptionChange = (e) => {
        this.setState({descriptionInput: e.target.value});
    }

    saveFrom = () => {
        let seatLayoutList = this.state.seatLayoutList;
        seatLayoutList.push({
            id: this.state.seatLayoutList.length + 1,
            name: this.state.nameInput,
            description: this.state.descriptionInput
        });
        this
            .props
            .setseatLayoutList(seatLayoutList);
        this.setState({seatLayoutList});
    }

    render() {
        return (
            <div className="seat-layout-container">
                <div className="actions-box txt-right">
                    <button
                        className={`btn ${this.state.showForm
                        ? 'disabled '
                        : ''}font-14`}
                        onClick={() => this.handleModal(true)}
                        disabled={this.state.showForm}>
                        <i className="fa fa-plus"></i>
                        &nbsp; Add Seat Chart
                    </button>
                </div>
                <div>
                    {!this.state.seatLayoutList.length && !this.state.showForm
                        ? <h3 className="text-center">No Seat Chart is there, Add Now</h3>
                        : <div className="seat-layout-table">
                            <table className="width100">
                                <thead>
                                    <tr>
                                        <td className="table-header">Chart Name / Description</td>
                                        <td className="table-header">Seats</td>
                                        <td className="table-header"></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this
                                        .state
                                        .seatLayoutList
                                        .map(list => {
                                            return <tr>
                                                <td className="td-body">
                                                    <div className="seat-chart-name">{list.name}</div>
                                                    <div className="seat-chart-desc">{list.description}</div>
                                                </td>
                                                <td className="td-body">{list.seats
                                                        ? list.seats
                                                        : 0}</td>
                                                        <td className="td-body">
                                                            <span>
                                                                <i className="fa fa-pencil"></i>
                                                            </span> &nbsp;
                                                            <span>
                                                                <i className="fa fa-trash hover-danger"></i>
                                                            </span>
                                                        </td>
                                            </tr>
                                        })}
                                </tbody>

                            </table>
                        </div>
}
                </div>

                {this.state.showForm
                    ? <Modal show={this.state.showForm} handleClose={() => this.handleModal(false)}>
                            <div className="seat-form-container">
                                <form className="seat-form">
                                    <div className={`seat-name-input`}>
                                        <fieldset class="input-material">
                                            <input
                                                className="form-input"
                                                type="text"
                                                onChange={this.onNameChange}
                                                value={this.state.nameInput}
                                                spellCheck={false}
                                                required/>
                                            <hr className="input-hr"/>
                                            <label className="input-label">Name*</label>
                                        </fieldset>
                                    </div>

                                    <div className={`seat-name-input`}>
                                        <fieldset class="input-material">
                                            <input
                                                className="form-input"
                                                type="text"
                                                onChange={this.onDescriptionChange}
                                                value={this.state.descriptionInput}
                                                spellCheck={false}
                                                required/>
                                            <hr className="input-hr"/>
                                            <label className="input-label">Description</label>
                                        </fieldset>
                                    </div>
                                    <div className="actions-btn">
                                        <button
                                            className="btn font-14"
                                            onClick={() => {
                                            this.saveFrom();
                                            this.handleModal(false)
                                        }}>Save</button>
                                        <button className="btn font-14" onClick={() => this.handleModal(false)}>
                                            Cancel
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </Modal>

                    : null}
            </div>
        )
    }
}
export default AdminSeatLayout;
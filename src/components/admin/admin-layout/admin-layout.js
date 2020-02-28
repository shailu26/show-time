import React, {Component} from 'react';
import './admin-layout.scss';
import Tabs from '../../global-component/tabs/tabs';
import {Tab} from '../../global-component/tab/tab';
import Modal from '../../modal/modal';

class AdminPanel extends Component {
    static maxSeats = 15;
    state = {
        selection: 'seat',
        seatLayoutList: [
            {
                id: 1,
                name: 'New Layout',
                description: 'Description Detail',
                seatLayout: {
                    'A': {
                        columns: {
                            1: [
                                1, 2, 3, 4, 5
                            ],
                            2: [
                                6, 7, 8, 9, 10
                            ],

                            3: [11, 12, 13, 14, 15]

                        }
                    },
                    'B': {
                        columns: {
                            1: [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15
                            ]
                        }
                    }
                }
            }
        ],
        seatFormMode: '',
        showSeatForm: false,
        nameInput: '',
        descriptionInput: '',
        seatLayoutEditId: 0,
        alphabets: new Array(10)
            .fill(1)
            .map((_, i) => String.fromCharCode(65 + i)),
        selectedAlphabet: 'A',
        columns: Array.from({
            length: 3
        }, (v, i) => i + 1),
        selectedColumns: {
            1: [],
            2: [],
            3: []
        },
        columnOneSeats: [],
        columnOneSelectedText: ``,
        columnTwoSeats: [],
        columnTwoSelectedText: '',
        columnThreeSeats: [],
        columnThreeSelectedText: '',
        seatNumbers: Array.from({
            length: AdminPanel.maxSeats
        }, (v, i) => i + 1)
    }

    setSeatFormMode = (value) => {
        this.setState({seatFormMode: value});
    }

    setShowSeatForm = (value) => {
        this.setState({showSeatForm: value});
    }

    setseatLayoutList = (list) => {
        this.setState({seatLayoutList: list});
    }

    handleModal = (value) => {
        this.setState({showSeatForm: value});
        if (!value) {
            this.setState({nameInput: '', descriptionInput: ''});
        }
    }

    onNameChange = (e) => {
        this.setState({nameInput: e.target.value});
    }

    onDescriptionChange = (e) => {
        this.setState({descriptionInput: e.target.value});
    }

    saveForm = () => {
        if (this.state.nameInput) {
            let seatLayoutList = this.state.seatLayoutList;
            if (this.state.seatFormMode === 'add') {
                seatLayoutList.push({
                    id: this.state.seatLayoutList.length + 1,
                    name: this.state.nameInput,
                    description: this.state.descriptionInput
                });
                this.setState({seatLayoutList, nameInput: '', descriptionInput: ''});
                this.handleModal(false);
            } else {
                let index = this
                    .state
                    .seatLayoutList
                    .findIndex(list => list.id === this.state.seatLayoutEditId);
                if (index > -1) {
                    seatLayoutList[index] = {
                        id: this.state.seatLayoutEditId,
                        name: this.state.nameInput,
                        description: this.state.descriptionInput
                    }
                    this.setState({seatLayoutList, nameInput: '', descriptionInput: ''});
                    this.handleModal(false);
                }
            }
        }
    }

    editForm = (list) => {
        this.setState({nameInput: list.name, descriptionInput: list.description, seatLayoutEditId: list.id});
        this.handleModal(true);
    }
    deleteSeatLayout = (list) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to delete?')) {
            let seatLayoutList = this.state.seatLayoutList;
            seatLayoutList = seatLayoutList.filter(d => d.id !== list.id);
            this.setState({seatLayoutList});
        }
    }
    columnSeatsSelected = (columnNumber, seats) => {
        let seatLength = Array.from({
            length: seats
        }, (v, i) => i + 1);

        switch (columnNumber) {
            case 'one':
                let columnTwoSeats = [];
                this
                    .state
                    .seatNumbers
                    .forEach(number => {
                        if (number >= seats && number + 1 !== AdminPanel.maxSeats + 1) {
                            columnTwoSeats.push(number + 1);
                        }
                    });
                this.setState({
                    columnOneSeats: seatLength,
                    columnTwoSeats,
                    columnThreeSeats: [],
                    columnOneSelectedText: `From ${this.state.selectedAlphabet}-${1} to ${this.state.selectedAlphabet}-${seats}`,
                    columnTwoSelectedText: `From ${this.state.selectedAlphabet}-${+seats+1} to ${this.state.selectedAlphabet}-${columnTwoSeats[columnTwoSeats.length-1]}`,
                    columnThreeSelectedText: ''
                });
                break;
            case 'two':
                let columnThreeSeats = [];
                this
                    .state
                    .seatNumbers
                    .forEach(number => {
                        if (number >= seats && number + 1 !== AdminPanel.maxSeats + 1) {
                            columnThreeSeats.push(number + 1);
                        }
                    });
                this.setState({
                    columnThreeSeats,
                    columnTwoSelectedText: `From ${this.state.selectedAlphabet}-${this.state.columnTwoSeats[0]} to ${this.state.selectedAlphabet}-${seats}`,
                    columnThreeSelectedText: `From ${this.state.selectedAlphabet}-${ + seats + 1} to ${this.state.selectedAlphabet}-${columnThreeSeats[columnThreeSeats.length - 1]}`
                });
                break;
            case 'three': 
                this.setState({
                    columnThreeSelectedText: `From ${this.state.selectedAlphabet}-${this.state.columnTwoSeats[0]+1} to ${this.state.selectedAlphabet}-${seats}`
                })
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div className="admin-container">
                <Tabs>
                    <Tab title={'Seat'} linkClassName={'custom-link'}>
                        <div className="seat-layout-container">
                            <div className="actions-box txt-right">
                                <button
                                    className={`btn ${this.state.showSeatForm
                                    ? 'disabled '
                                    : ''}font-14`}
                                    onClick={() => {
                                    this.setSeatFormMode('add');
                                    this.handleModal(true)
                                }}
                                    disabled={this.state.showSeatForm}>
                                    <i className="fa fa-plus"></i>
                                    &nbsp; Add Seat Chart
                                </button>
                            </div>
                            <div>
                                {!this.state.seatLayoutList.length
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
                                                        return <tr key={list.id}>
                                                            <td className="td-body">
                                                                <div className="seat-chart-name">{list.name}</div>
                                                                <div className="seat-chart-desc">{list.description}</div>
                                                            </td>
                                                            <td className="td-body">{list.seats
                                                                    ? list.seats
                                                                    : 0}</td>
                                                            <td className="td-body">
                                                                <span
                                                                    onClick={() => {
                                                                    this.setSeatFormMode('edit');
                                                                    this.editForm(list)
                                                                }}>
                                                                    <i className="fa fa-pencil"></i>
                                                                </span>
                                                                &nbsp;
                                                                <span onClick={() => this.deleteSeatLayout(list)}>
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

                            {this.state.showSeatForm
                                ? <Modal
                                        show={this.state.showSeatForm}
                                        handleClose={() => this.handleModal(false)}>
                                        <div className="seat-form-container">
                                            <form className="seat-form">
                                                <div className="form-inputs">
                                                    <div className={`seat-name-input`}>
                                                        <fieldset className="input-material">
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
                                                        <fieldset className="input-material">
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
                                                    <div className="seat-name-input pd-left-5">
                                                        <div className="width100 display-flex">
                                                            <div className="">
                                                                <span className="pd-right-25">Row
                                                                </span>
                                                                <select id="alphabets">
                                                                    {this
                                                                        .state
                                                                        .alphabets
                                                                        .map(letter => {
                                                                            return <option value={letter}>{letter}</option>
                                                                        })}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="seat-name-input pd-left-5">
                                                        <div className="width100 display-flex">
                                                            <div>
                                                                <span className="pd-right-25">Column 1 Seat Numbers {this.state.columnOneSeats.length
                                                                        ? <span className="column-seat-text">
                                                                                ({this.state.columnOneSelectedText})
                                                                            </span>
                                                                        : null}
                                                                </span>
                                                                <select
                                                                    id="seat-number-list"
                                                                    onChange={(e) => this.columnSeatsSelected('one', e.target.value)}>
                                                                    {this
                                                                        .state
                                                                        .seatNumbers
                                                                        .map(number => {
                                                                            return <option value={number}>{number}</option>
                                                                        })}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {this.state.columnTwoSeats.length
                                                        ? <div className="seat-name-input pd-left-5">
                                                                <div className="width100 display-flex">
                                                                    <div>
                                                                        <span className="pd-right-25">Column 2 Seat Numbers {this.state.columnTwoSeats.length
                                                                                ? <span className="column-seat-text">
                                                                                        ({this.state.columnTwoSelectedText})
                                                                                    </span>
                                                                                : null}
                                                                        </span>
                                                                        <select
                                                                            id="seat-number-list"
                                                                            onChange={(e) => this.columnSeatsSelected('two', e.target.value)}>
                                                                            {this
                                                                                .state
                                                                                .columnTwoSeats
                                                                                .map(number => {
                                                                                    return <option value={number}>{number}</option>
                                                                                })}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        : null}
                                                    {this.state.columnThreeSeats.length
                                                        ? <div className="seat-name-input pd-left-5">
                                                                <div className="width100 display-flex">
                                                                    <div>
                                                                        <span className="pd-right-25">Column 3 Seat Numbers {this.state.columnThreeSeats.length
                                                                                ? <span className="column-seat-text">
                                                                                        ({this.state.columnThreeSelectedText})
                                                                                    </span>
                                                                                : null}
                                                                        </span>
                                                                        <select
                                                                            id="seat-number-list"
                                                                            onChange={(e) => this.columnSeatsSelected('three', e.target.value)}>
                                                                            {this
                                                                                .state
                                                                                .columnThreeSeats
                                                                                .map(number => {
                                                                                    return <option value={number}>{number}</option>
                                                                                })}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        : null
}
                                                </div>
                                                <div className="actions-btn">
                                                    <button
                                                        className={`btn font-14 ${this.state.nameInput
                                                        ? ''
                                                        : 'btn-disabled'}`}
                                                        onClick={() => {
                                                        this.saveForm();
                                                        this.handleModal(false)
                                                    }}
                                                        disabled={!this.state.nameInput}>Save</button>
                                                    <button className="btn font-14" onClick={() => this.handleModal(false)}>
                                                        Cancel
                                                    </button>
                                                </div>

                                            </form>
                                        </div>
                                    </Modal>

                                : null}
                        </div>
                    </Tab>
                    <Tab title={'Theatre'} linkClassName={'custom-link'}>
                        <div>Theatre tab</div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
export default AdminPanel;
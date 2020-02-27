import React, {Component} from 'react';
import './admin-layout.scss';
import AdminSeatLayout from '../admin-seat-layout/admin-seat-layout';
import Tabs from '../../global-component/tabs/tabs';
import {Tab} from '../../global-component/tab/tab';

class AdminPanel extends Component {
    state = {
        selection: 'seat',
        seatLayoutList: [{id: 1, name: 'abc', description: 'ok ok ok '}],
        showSeatForm: false
    }
    setShowSeatForm = (value) => {
        this.setState({showSeatForm: value});
    }
    setseatLayoutList = (list) => {
        this.setState({seatLayoutList: list});
    }
    render() {
        return (
            <div className="admin-container">

                <Tabs>
                    <Tab title={'Seat'} linkClassName={'custom-link'}>
                        <AdminSeatLayout setseatLayoutList={this.setseatLayoutList} seatLayoutList={this.state.seatLayoutList} showSeatForm={this.state.showSeatForm} setShowSeatForm={this.setShowSeatForm}/>
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
import React, {Component} from 'react';
import './admin-layout.scss';
import AdminSeatLayout from '../admin-seat-layout/admin-seat-layout';
import Tabs from '../../global-component/tabs/tabs';
import {Tab} from '../../global-component/tab/tab';

class AdminPanel extends Component {
    state = {
        selection: 'seat',
        seatLayoutList: []
    }
    render() {
        return (
            <div className="admin-container">

                <Tabs>
                    <Tab title={'Seat'} linkClassName={'custom-link'}>
                        <AdminSeatLayout seatLayoutList={this.state.seatLayoutList}/>
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
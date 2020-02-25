import React, {Component} from 'react';
const ShowTimeAppContext = React.createContext();

class ShowTimeProvider extends Component {
    state = {
        seatData: {
            isSeatSelected: false,
            setIsSeatSelected: (value) => {
                this.setState(prevState => ({
                    seatData: { // object that we want to update
                        ...prevState.seatData, // keep all other key-value pairs
                        isSeatSelected: value // update the value of specific key
                    }
                }))
            },
            totalSeats: 0,
            setTotalSeat: (value) => {
                this.setState(prevState => ({
                    seatData: { // object that we want to update
                        ...prevState.seatData, // keep all other key-value pairs
                        totalSeats: value // update the value of specific key
                    }
                }))
            },
            selectedSeat: 0,
            setSelectedSeat: (value) => {
                this.setState(prevState => ({
                    seatData: { // object that we want to update
                        ...prevState.seatData, // keep all other key-value pairs
                        selectedSeat: value // update the value of specific key
                    }
                }))
            }
        }
    }
    render() {
        return (
            <ShowTimeAppContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </ShowTimeAppContext.Provider>
        )
    }
}

export {ShowTimeProvider, ShowTimeAppContext}

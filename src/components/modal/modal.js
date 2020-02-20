import React, {Component} from 'react';
import './modal.scss';
class Modal extends Component {

    render() {
        return (
            <div
                className={this.props.show
                ? "modal display-block"
                : "modal display-none"}>
                <section className="modal-main">
                    <div className="close-modal">
                        <i onClick={this.props.handleClose} className="fa fa-times fa-2x"></i>
                    </div>
                    {this.props.children}
                    
                </section>
            </div>
        );
    }

}

export default Modal

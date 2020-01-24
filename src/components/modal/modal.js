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
                    {this.props.children}
                    <button onClick={this.props.handleClose}>close</button>
                </section>
            </div>
        );
    }

}

export default Modal

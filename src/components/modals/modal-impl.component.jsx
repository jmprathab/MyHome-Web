import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ModalImpl extends Component {
  constructor(props) {
    super(props);

    this.callCloseFunction = this.callCloseFunction.bind(this);
    this.callSubmitFunction = this.callSubmitFunction.bind(this);
  }

  callCloseFunction() {
    this.props.closeFunction();
  }
  callSubmitFunction() {
    this.props.submitFunction();
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.callCloseFunction}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant={this.props.cancelButtonVariant ? this.props.cancelButtonVariant : 'secondary'} onClick={this.callCloseFunction}>
            {this.props.cancelText ? this.props.cancelText : 'Cancel'}
          </Button>
          <Button variant={this.props.submitButtonVariant ? this.props.submitButtonVariant : 'primary'} onClick={this.callSubmitFunction}>
            {this.props.submitText ? this.props.submitText : 'Submit'}
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ModalImpl;

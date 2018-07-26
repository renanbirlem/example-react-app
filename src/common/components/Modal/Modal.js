import React, { Fragment } from 'react';
import Modal from 'react-responsive-modal';
import {
    Row, Col
} from 'reactstrap';

class ErrorModal extends React.Component {
    render() {
        const { open, title, content, hiddenHeader } = this.props;

        return (
            <div>
                <Modal
                    open={open}
                    onClose={this.props.onCloseModal}
                    center
                    classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
                >
                    <Row>
                        <Col md={12} xs={12}>
                            {!Boolean(hiddenHeader) &&
                                <Fragment>
                                    <h3><strong>{title}</strong></h3>
                                    <hr />
                                </Fragment>
                            }
                            <p>{content}</p>
                        </Col>
                    </Row>
                </Modal>
            </div>
        );
    }
}

export default ErrorModal;
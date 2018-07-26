import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { Row, Col } from 'reactstrap';
import { PanelHeader } from 'common/components';
import { actions } from 'common/reducers/exampleReducer';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
    }

    componentWillReceiveProps(newProps) {
    }

    render() {
        return (
            <div>
                <PanelHeader size="md" />
                <div className="content">
                    <Row>
                        <Col xs={4} md={6}>
                            Card
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ example }) => {
    return { ...example };
}

const mapDispatchToProps = { ...actions };

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { actions } from 'common/reducers/exampleReducer';
import { Card, CardBody, CardHeader, CardFooter, CardTitle, Row, Col } from 'reactstrap';
import { PanelHeader } from 'common/components';
import { Button } from 'common/components';
import PageContent from './components/PageContent';

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <div>
                {this.state.alert}

                <PanelHeader size="sm" />
                <div className="content">
                    <Row>
                        <Col md={12} xs={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Page</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <PageContent />
                                </CardBody>
                                <CardFooter>
                                    <Row>
                                        <Button color="default" size="md" onClick={() => { }}>
                                            Action
                                        </Button>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ app }) => {
    return { ...app };
}

const mapDispatchToProps = { ...actions };

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Page);

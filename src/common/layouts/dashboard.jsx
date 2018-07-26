import React from 'react';
import { connect } from 'react-redux';
import PerfectScrollbar from 'perfect-scrollbar';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { Header, Footer, Sidebar, Loading } from 'common/components'
import Notifications from 'react-notification-system-redux';
import { NOTIFICATION_STYLE } from 'common/constants/settings';
import { actions } from 'common/reducers/appReducer';
import dashboardRoutes from 'common/routes/dashboard.jsx';

var ps;

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentWillReceiveProps(newProps) {
        if(newProps.top && newProps.top === true){
            this.refs.mainPanel.scrollTop = 0;
            this.props.scrollToTop(false);
        }
    }

    componentDidMount() {
        ps = new PerfectScrollbar(this.refs.mainPanel);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            ps.update();
            this.refs.mainPanel.scrollTop = 0;
        }
    }

    componentWillUnmount() {
        ps.destroy();
    }

    render() {
        const { loading, notifications } = this.props;
        return (
            <div>
                {loading && <Loading />}

                <div className="wrapper">
                    <Notifications
                        style={NOTIFICATION_STYLE}
                        notifications={notifications}
                    />

                    <Sidebar {...this.props} routes={dashboardRoutes} />
                    <div className="main-panel" ref="mainPanel">
                        <Header {...this.props} />
                        <Switch>
                            {
                                dashboardRoutes.map((prop, key) => {
                                    if (prop.collapse) {
                                        return prop.views.map((prop2, key2) => {
                                            return (
                                                <Route path={prop2.path} component={prop2.component} key={key2} />
                                            );
                                        })
                                    }
                                    if (prop.redirect)
                                        return (
                                            <Redirect from={prop.path} to={prop.pathTo} key={key} />
                                        );
                                    return (
                                        <Route path={prop.path} component={prop.component} key={key} />
                                    );
                                })
                            }
                        </Switch>
                        {
                            this.props.location.pathname.indexOf('full-screen-maps') !== -1 ? null : <Footer fluid />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ notifications, ...state, app }) => ({
    ...state.app,
    notifications,
    ...app
});

export default connect(mapStateToProps, { ...actions })(Dashboard);
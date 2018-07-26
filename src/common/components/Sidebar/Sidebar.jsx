import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Collapse } from 'reactstrap';
// react plugin for creating notifications over the dashboard
import NotificationAlert from 'react-notification-alert';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';

import { Button } from 'common/components';

import avatar from 'assets/img/default-avatar.png';
import logo from "assets/img/now-logo.png";

var ps;

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openAvatar: false,
        }
        this.activeRoute.bind(this);
        this.minimizeSidebar = this.minimizeSidebar.bind(this);
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    minimizeSidebar(){
        document.body.classList.toggle('sidebar-mini');
    }
    componentDidMount(){
        ps = new PerfectScrollbar(this.refs.sidebar,{suppressScrollX: true, suppressScrollY: false});
    }
    componentWillUnmount(){
        ps.destroy();
    }
    render(){
        return (
            <div className="sidebar" data-color="blue">
                <NotificationAlert ref="notificationAlert"/>
                <div className="logo">
                	<a href="./" className="simple-text logo-mini">
                        <div className="logo-img">
                            <img src={logo} alt="react-logo" />
                        </div>
                	</a>
                	<a href="./" className="simple-text logo-normal">
                		Example App
                	</a>
                    <div className="navbar-minimize">
                        <Button simple neutral icon round id="minimizeSidebar" onClick={this.minimizeSidebar}>
                            <i className="now-ui-icons text_align-center visible-on-sidebar-regular"></i>
                            <i className="now-ui-icons design_bullet-list-67 visible-on-sidebar-mini"></i>
                        </Button>
                    </div>
                </div>


                <div className="sidebar-wrapper" ref="sidebar">
                    <div className="user">
                        <div className="photo">
                            <img src={avatar} alt="Avatar"/>
                        </div>
                        <div className="info">
                            <a data-toggle="collapse" aria-expanded={this.state.openAvatar} onClick={ ()=> this.setState({ openAvatar: !this.state.openAvatar })}>
                                <span>
                                    Usuário
                                    <b className="caret"></b>
                                </span>
                            </a>
                            <Collapse isOpen={this.state.openAvatar}>
                                <ul className="nav">
                                    <li>
                						<a>
                							<span className="sidebar-mini-icon">MP</span>
                							<span className="sidebar-normal">Meu perfil</span>
                						</a>
                					</li>
                					<li>
                						<a>
                							<span className="sidebar-mini-icon">PF</span>
                							<span className="sidebar-normal">Preferências</span>
                						</a>
                					</li>
                                </ul>
                            </Collapse>
                        </div>
                    </div>

                    <Nav>
                        {
                            this.props.routes.map((prop,key) => {
                                if(prop.linkOnly)
                                    return null;
                                if(prop.redirect)
                                    return null;
                                if(prop.collapse){
                                    var st = {};
                                    st[prop["state"]] = !this.state[prop.state];
                                    return (
                                        <li className={this.activeRoute(prop.path)} key={key}>
                                            <a data-toggle="collapse" aria-expanded={this.state[prop.state]} onClick={ () => this.setState(st)}>
                                                <i className={"now-ui-icons "+prop.icon}></i>
                                                <p>{prop.name}
                                                   <b className="caret"></b>
                                                </p>
                                            </a>
                                            <Collapse isOpen={this.state[prop.state]}>
                                                <ul className="nav">
                                                    {
                                                        prop.views.map((prop,key) => {
                                                            if(prop.redirect)
                                                                return null;
                                                            return (
                                                                <li className={this.activeRoute(prop.path)} key={key}>
                                                                    <NavLink to={prop.path} activeClassName="active">
                                                                        <span className="sidebar-mini-icon">{prop.mini}</span>
                                                                        <span className="sidebar-normal">{prop.name}</span>
                                                                    </NavLink>
                                                                </li>
                                                            );
                                                        })
                                                    }
                                                </ul>
                                            </Collapse>
                                        </li>
                                    );
                                }
                                return (
                                    <li className={this.activeRoute(prop.path)} key={key}>
                                        <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                            <i className={"now-ui-icons "+prop.icon}></i>
                                            <p>{prop.name}</p>
                                        </NavLink>
                                    </li>
                                );
                            })
                        }
                    </Nav>

                </div>
            </div>
        );
    }
}

export default Sidebar;

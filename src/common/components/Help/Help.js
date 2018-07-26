import React, { Fragment } from 'react';
import { UncontrolledTooltip } from 'reactstrap';

const style = {
    icon: {
        color: '#CCC'
    }
}

const Help = props => {
    return (
        <Fragment>
            <i id={'helpTip_' + props.target} className="now-ui-icons travel_info" style={style.icon}></i>
            <UncontrolledTooltip
                placement={props.placement ? props.placement : "top"}
                target={'helpTip_' + props.target}
                delay={1}>
                {props.text}
            </UncontrolledTooltip>
        </Fragment>
    );
};

export default Help;

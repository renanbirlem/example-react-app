import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';

class Timeline extends React.Component{
    render(){
        return (
            <ul className={"timeline" + (this.props.simple ? " timeline-simple":"")}>
                {
                    this.props.stories.map((prop,key) => {
                        return (
                            <li className={prop.inverted ? "timeline-inverted":""} key={key}>
                                {
                                    prop.badgeIcon ? (
                                        <div className={"timeline-badge "+prop.badgeColor}>
                                            <i className={prop.badgeIcon}></i>
                                        </div>
                                    ):null
                                }
                                <div className="timeline-panel">
                                    {
                                        prop.title ? (
                                            <div className="timeline-heading">
                                                <span className={"badge badge-"+prop.titleColor}>{prop.title}</span>
                                            </div>
                                        ):null
                                    }
                                    <div className="timeline-body">{prop.body}</div>
                                    {
                                        prop.footerTitle ? (
                                            <h6><i className={prop.footerIcon}></i> {prop.footerTitle}</h6>
                                        ):null
                                    }
                                    {
                                        prop.footer ? (
                                            <div className="timeline-footer">{prop.footer}</div>
                                        ):null
                                    }
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

Timeline.propTypes = {
    stories: PropTypes.arrayOf(PropTypes.object),
    simple: PropTypes.bool
}

export default Timeline;

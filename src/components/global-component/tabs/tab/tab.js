import React from 'react';
export const Tab = (props) => {
    return (
        <li className={`tab ${props.linkClassName} ${props.isActive ? 'active' : ''}`}>
            <a href className={`tab-link`}
                onClick={(event) => {
                    event.preventDefault();
                    props.onClick(props.tabIndex);
                }}>
                <i className={`tab-icon ${props.iconClassName}`}/>
            </a>
        </li>
    )
}

Tab.propTypes = {
  onClick      : React.PropTypes.func,
  tabIndex     : React.PropTypes.number,
  isActive     : React.PropTypes.bool,
  iconClassName: React.PropTypes.string.isRequired,
  linkClassName: React.PropTypes.string.isRequired
};

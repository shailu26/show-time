import React from 'react';
import '../tab/tab.scss';
export const Tab = (props) => {
    return (
        <li className={`tab ${props.linkClassName} ${props.isActive ? 'active' : ''}`}>
            <a href="#" className={`tab-link`}
                onClick={(event) => {
                    event.preventDefault();
                    props.onClick(props.tabIndex);
                }}>
                {props.title}
            </a>
        </li>
    )
}

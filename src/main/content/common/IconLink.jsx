import React from 'react';

const IconLink = (props) => (
    <span className="iconLink">
        <img
            src = {"/images/icons/" + props.icon}
            alt = {props.icon}
            className = "icon"
        />
        <a
            href = {props.href}
            className = "iconLinkText"
        >
            {props.text}
        </a>
    </span>
)

export default IconLink;
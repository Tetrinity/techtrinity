import React from 'react';

const IconLink = (props) => (
    <span className="iconLink">
        <img
            src = {"/images/icons/" + props.icon}
            alt = {props.icon}
            className = "icon"
        />
        <a
            target = "_blank"
            rel = "noopener noreferrer"
            href = {props.href}
            className = "iconLinkText"
        >
            {props.text}
        </a>
    </span>
)

export default IconLink;
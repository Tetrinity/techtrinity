import React from 'react';

class Title extends React.PureComponent {
    render(){
        const isLarge = this.props.large;
        const hasSeparator = this.props.separator;

        let titleClass = "";

        if (isLarge){ titleClass += "largeTitle " } else { titleClass += "smallTitle " }
        if (hasSeparator){ titleClass += "separator " }

        return (
            <h2 className={"title " + titleClass}>{this.props.text}</h2>
        )
    }
}

export default Title;
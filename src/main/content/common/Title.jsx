import React from 'react';

class Title extends React.PureComponent {
    render(){
        const size = this.props.size;
        const hasSeparator = this.props.separator;

        let titleClass = "";

        if (size == "large"){ titleClass += "largeTitle " }
        else if (size == "small"){ titleClass += "smallTitle " }
        else { titleClass += "mediumTitle " }

        if (hasSeparator){ titleClass += "separator " }

        return (
            <h2 className={"title " + titleClass}>{this.props.text}</h2>
        )
    }
}

export default Title;
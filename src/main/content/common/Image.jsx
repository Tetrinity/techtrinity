import React from 'react';

class Image extends React.PureComponent {
    render(){
        if (!this.props.name){ return null; }

        let imageLocation;
        if (this.props.static){ imageLocation = "0000-static"; }
        else if (this.props.date){ imageLocation = this.props.date; }
        else { return null; }

        imageLocation += "/";
        imageLocation += this.props.name;

        return (
            <div>
                <img
                    src = {"images/content/" + imageLocation}
                    alt = {imageLocation}
                    className = "profile"
                />
            </div>
        )
    }
}

export default Image;
import React from 'react';
import moment from 'moment';

class Timestamp extends React.PureComponent {

    render(){
        let isoTime = this.props.time;
        let time = moment(isoTime).format("Do MMMM YYYY");

        return (
            <span className="timestamp">{time}</span>
        )
    }

}

export default Timestamp;
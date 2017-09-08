import React from 'react';
import moment from 'moment';

const baseYear = "2017";

class Copyright extends React.PureComponent {

    getCopyrightNotice(){
        let currentYear = moment().year();

        return "Copyright Sam Gibbon, " + baseYear + " - " + currentYear;
    }

    render(){
        return (
            <span className="copyright">{this.getCopyrightNotice()}</span>
        )
    }

}

export default Copyright;
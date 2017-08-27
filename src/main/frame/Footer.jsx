import React from 'react';
import moment from 'moment';

import Copyright from './Copyright';

const baseYear = "2017";

class Footer extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {}
    }

    getCopyrightNotice(){
        let currentYear = moment().year();

        return "Copyright Sam Gibbon, " + baseYear + " - " + currentYear;
    }

    render(){
        return (
            <div>
                <Copyright/>
            </div>
        )
    }

}

export default Footer;
import React from 'react';
import moment from 'moment';

import Copyright from './Copyright';

class Footer extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {}
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
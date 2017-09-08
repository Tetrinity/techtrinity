import React from 'react';

import Copyright from './Copyright';

class Footer extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className="footer">
                <Copyright/>
            </div>
        )
    }

}

export default Footer;
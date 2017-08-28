import React from 'react';

class Body extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className="body">
                test body content
            </div>
        )
    }

}

export default Body;
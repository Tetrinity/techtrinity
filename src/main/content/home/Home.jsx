import React from 'react';

class Home extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className="home">
                <div className="col main">
                    test home page content
                </div>
                <div className="col side">
                    second panel
                </div>
            </div>
        )
    }

}

export default Home;
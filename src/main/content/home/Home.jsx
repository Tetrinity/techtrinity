import React from 'react';

import Title from '../common/Title';

class Home extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className="home">
                <div className="col main">
                    <Title text="About Me"/>
                    <p className="intro">
                        My name is Sam Gibbon, and I am a full stack developer.
                    </p>
                    <p>
                        Second paragraph
                    </p>
                </div>
                <div className="col side">
                    second panel
                </div>
            </div>
        )
    }

}

export default Home;
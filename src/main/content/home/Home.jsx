import React from 'react';

import Title from '../common/Title';
import IconLink from '../common/IconLink';

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
                    <Title text="Online"/>
                    <IconLink icon="GitHub.png" text="GitHub" href="https://github.com/Tetrinity"/>
                    <IconLink icon="Stack_Overflow.png" text="Stack Overflow" href="https://stackoverflow.com/users/3219738/tetrinity?tab=profile"/>
                </div>
            </div>
        )
    }

}

export default Home;
import React from 'react';

import Title from '../common/Title';
import IconLink from '../common/IconLink';
import Image from "../common/Image";

class Home extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className="home">
                <div className="col main">
                    <Image static class="profile" name="SG-Photo.jpeg"/>
                    <div className="intro">
                        <Title text="Sam Gibbon" size="large"/>
                        <Title text="Full Stack Developer"/>
                    </div>
                    <p>
                        <Title text="Test header" size="small"/>
                        <span className="indent">test content</span>
                    </p>
                    <p>
                        <Title text="Second header" size="small"/>
                        <span className="indent">more content</span>
                    </p>
                </div>
                <div className="col side">
                    <Title text="Online" separator/>
                    <IconLink icon="GitHub.png" text="GitHub" href="https://github.com/Tetrinity"/>
                    <IconLink icon="Stack_Overflow.png" text="Stack Overflow" href="https://stackoverflow.com/users/3219738/tetrinity?tab=profile"/>
                    <IconLink icon="LinkedIn.png" text="LinkedIn™" href="https://www.linkedin.com/in/sam-gibbon-7b1289b7/"/>
                </div>
            </div>
        )
    }

}

export default Home;
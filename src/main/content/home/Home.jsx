import React from 'react';

import Title from '../common/Title';
import IconLink from '../common/IconLink';
import Image from "../common/Image";

import WordpressActions from '../../../flux/actions/WordpressActions';
import WordpressStore from '../../../flux/stores/WordpressStore';

class Home extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {}

        this.onPostsUpdate = this.onPostsUpdate.bind(this);
    }

    getInitialState(){
        return WordpressStore.getState();
    }

    componentDidMount(){
        WordpressStore.listen(this.onPostsUpdate);
        WordpressActions.fetchPosts();
    }
    componentWillUnmount(){
        WordpressStore.unlisten(this.onPostsUpdate);
    }

    onPostsUpdate(state){
        console.log("Updated state: " + JSON.stringify(state));
        this.setState(state);
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
                        <Title text="Stereotypical Nerd..." size="small"/>
                        <span className="indent">Professional software developer, board gamer, Rubik's Cube enthusiast</span>
                    </p>
                    <p>
                        <Title text="...But Working On It" size="small"/>
                        <span className="indent">Triathlete, drummer, creative writer</span>
                    </p>
                    <p>
                        <Title text="Overall a decent chap" size="small"/>
                        <span className="indent">citation needed</span>
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
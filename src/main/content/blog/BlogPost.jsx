import React from 'react';

import Title from '../common/Title';

import Timestamp from './Timestamp';

class BlogPost extends React.PureComponent {

    render(){
        let json = this.props.json;

        if (!json){
            return (
                <div className="loading">
                    Loading...
                </div>
            )
        }

        let title = json.title.rendered;
        let datePosted = json.date;
        let content = { __html: json.content.rendered };
        
        return (
            <div className="blogPost">
                <Title noSpacer separator text={title}/>
                <Timestamp time={datePosted}/>
                <div className="content">
                    <div dangerouslySetInnerHTML={content}></div>
                </div>
                {JSON.stringify(json)}
            </div>
        )
    }

}

export default BlogPost;